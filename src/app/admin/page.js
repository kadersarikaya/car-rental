"use client"
import React, {useEffect, useState, useRef} from "react";
import Chart from "chart.js/auto";
import axios from "axios";

const AdminDashboard = () => {
    const chartRef = useRef(null);
    const [orders, setOrders] = useState([])
    const [typeCounts, setTypeCounts] = useState({}); // Declare typeCounts here
    
    useEffect(() => {
        axios
            .get('http://localhost:4000/orders')
            .then(res => {
                setOrders(res.data)
            })
            .catch(err => console.log(err));
    }, [])

    useEffect(() => {
        // Extract data for the chart
        const orderTypes = orders.map(order => order.type);
        const counts = orderTypes.reduce((acc, type) => {
            acc[type] = (acc[type] || 0) + 1;
            return acc;
        }, {});

        setTypeCounts(counts);

        // Prepare data for the chart
        const data = {
            labels: Object.keys(typeCounts),
            datasets: [{
                data: Object.values(typeCounts),
                backgroundColor: ["#0D3559", "#175D9C", "#2185DE", "#63A9E8", "#A6CEF2"],
            }],
        };

        // Seçenekleriniz
        const options = {
            plugins: {
                legend: {
                    display: false,
                },
            },
            cutout: 100, // Ortadaki boşluğun yarıçapı
        };

        // Önceki Chart örneğini yok et
        if (chartRef.current) {
            chartRef.current.destroy();
        }

        // Yeni Chart örneği oluştur
        const ctx = document.getElementById("topCarRentalChart");
        chartRef.current = new Chart(ctx, {
            type: "doughnut", // Yuvarlak çubuk grafik türü
            data: data,
            options: options,
        });

        // useEffect içinde cleanup fonksiyonu, komponentin unmount olduğunda çalışır
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, [orders]);

  return (
    <div className="flex md:justify-normal justify-center h-auto">
        <div className="flex justify-between gap-4 p-4">
            <div className="p-6 bg-white rounded-lg w-full ">
                <h2 className="text-xl font-bold pb-6">Recent Transaction</h2>
                <div className="scroll-container gap-6 flex flex-col md:max-h-[500px] overflow-y-auto">
                    {orders.map((order)=> (
                        <div className="flex p-4 pr-8 justify-between gap-6">
                            <div className="flex gap-6">
                                <img width={132} height={170} src={order.carImage} alt="" />
                                <div className="flex flex-col gap-2">
                                    <h2 className="text-base font-bold">{order.title}</h2>
                                    <p className="text-[#90A3BF] text-sm font-medium">{order.type}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col p-6 bg-white rounded-lg items-center">
                <div className="pb-8">
                        <h1 className="pb-4 text-xl font-bold">Top 5 Car Rental</h1>
                        <div className="flex flex-col md:flex-row gap-4 p-6 bg-white rounded-lg items-center">
                        <div className="">
                            <canvas className="w-80 h-80 md:w-96 md:h-96" id="topCarRentalChart" width="400" height="400"></canvas>
                            <div className="text-center mt-4 text-lg font-semibold">
                                {orders.length} Rental Cars
                            </div>
                        </div>
                            <div className="flex flex-col gap-8">
                              {Object.keys(typeCounts).map((category, index) => (
                                  <div key={index} className="flex justify-between gap-4">
                                      <div className="flex gap-1 items-center">
                                          <div className={`rounded-full w-3 h-3 bg-${index === 0 ? "#0D3559" : "#175D9C"}`}></div>
                                          <p className="text-sm font-semibold">{category}</p>
                                      </div>
                                      <div>
                                          <p className="text-sm font-semibold">{typeCounts[category]}</p>
                                      </div>
                                  </div>
                              ))}
                                {/* <div className="flex justify-between ">
                                    <div className="flex gap-1 items-center">
                                        <div className="rounded-full w-3 h-3 bg-[#175D9C]"></div>
                                        <p className="text-sm font-semibold" >SUV</p>
                                    </div>
                                    <p className="text-sm font-semibold" >9,478</p>
                                </div>
                                <div className="flex justify-between ">
                                    <div className="flex gap-1 items-center">
                                        <div className="rounded-full w-3 h-3 bg-[#2185DE]"></div>
                                        <p className="text-sm font-semibold" >Coupe</p>
                                    </div>
                                    <p className="text-sm font-semibold" >18,197</p>
                                </div>
                                <div className="flex justify-between gap-6">
                                    <div className="flex gap-1 items-center">
                                        <div className="rounded-full w-3 h-3 bg-[#63A9E8]"></div>
                                        <p className="text-sm font-semibold" >Hatchback</p>
                                    </div>
                                    <p className="text-sm font-semibold" >12,510</p>
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex gap-1 items-center">
                                        <div className="rounded-full w-3 h-3 bg-[#A6CEF2]"></div>
                                        <p className="text-sm font-semibold">MPV</p>
                                    </div>
                                    <p className="text-sm font-semibold" >14,406</p>
                                </div> */}
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
};

export default AdminDashboard;
