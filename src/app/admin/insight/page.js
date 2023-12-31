"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';

const TotalRevenueChart = () => {
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    // Sipariş verilerini çekmek için bir axios isteği
    const fetchOrderData = async () => {
      try {
        const response = await axios.get('https://car-rental-api-0vx2.onrender.com/orders');
        setOrderData(response.data);
      } catch (error) {
        console.error('Error fetching order data:', error);
      }
    };

    fetchOrderData();
  }, []); 

  useEffect(() => {
    if (orderData.length > 0) {
      createChart();
    }
  }, [orderData]);

  const createChart = () => {
    const ctx = document.getElementById('totalRevenueChart').getContext('2d');

    const existingChart = Chart.getChart(ctx);
    if (existingChart) {
      existingChart.destroy();
    }

    // Toplam geliri hesapla
    const totalRevenue = orderData.reduce((total, order) => total + order.price, 0);
    console.log(totalRevenue)
    // Grafiği oluştur
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Total Revenue'],
        datasets: [
          {
            label: 'Total Revenue',
            data: [totalRevenue],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  };

  return (
    <div className='p-4 flex flex-col justify-center items-center' >
      <h2>Total Revenue Chart</h2>
      <canvas id="totalRevenueChart" width="800" height="400"></canvas>
    </div>
  );
};

export default TotalRevenueChart;
