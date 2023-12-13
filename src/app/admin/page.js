"use client"
import React, {useEffect, useRef} from "react";
import Chart from "chart.js/auto";

const AdminDashboard = () => {
    const chartRef = useRef(null);
    
    useEffect(() => {
        // Verileriniz
        const data = {
            labels: ["Sport Car", "SUV", "Coupe", "Hatchback", "MPV"],
            datasets: [{
                data: [17439, 9478, 18197, 12510, 14406],
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
    }, []);

  return (
    <div className="flex md:justify-normal justify-center h-auto">
        <div className="flex justify-between gap-4 p-4">
            <div className="p-6 bg-white rounded-lg w-full ">
                <h2 className="text-xl font-bold pb-6">Recent Transaction</h2>
                <div className="scroll-container gap-6 flex flex-col md:max-h-[500px] overflow-y-auto">
                    <div className="flex flex-col md:flex-row p-4 pr-8 justify-between gap-6">
                        <div className="flex gap-6">
                            <img src="https://placehold.co/132x70" alt="" />
                            <div className="flex flex-col gap-2">
                                <h2 className="text-base font-bold">Nissan GT - R</h2>
                                <p className="text-[#90A3BF] text-sm font-medium" >Sport Car</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-medium">20 July</p>
                            <h2 className="text-base font-bold">$80.00</h2>
                        </div>
                    </div>
                    <hr />
                        <div className="flex p-4 pr-8 gap-6 justify-between">
                        <div className="flex gap-6">
                            <img src="https://placehold.co/132x70" alt="" />
                            <div className="flex flex-col gap-2">
                                <h2 className="text-base font-bold">Nissan GT - R</h2>
                                <p className="text-[#90A3BF] text-sm font-medium" >Sport Car</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-medium">20 July</p>
                            <h2 className="text-base font-bold">$80.00</h2>
                        </div>
                    </div>
                    <hr />
                        <div className="flex p-4 pr-8 gap-6 justify-between">
                        <div className="flex gap-6">
                            <img src="https://placehold.co/132x70" alt="" />
                            <div className="flex flex-col gap-2">
                                <h2 className="text-base font-bold">Nissan GT - R</h2>
                                <p className="text-[#90A3BF] text-sm font-medium" >Sport Car</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-medium">20 July</p>
                            <h2 className="text-base font-bold">$80.00</h2>
                        </div>
                    </div>
                    <hr />
                        <div className="flex p-4 pr-8 gap-6 justify-between">
                        <div className="flex gap-6">
                            <img src="https://placehold.co/132x70" alt="" />
                            <div className="flex flex-col gap-2">
                                <h2 className="text-base font-bold">Nissan GT - R</h2>
                                <p className="text-[#90A3BF] text-sm font-medium" >Sport Car</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-medium">20 July</p>
                            <h2 className="text-base font-bold">$80.00</h2>
                        </div>
                    </div>
                    <hr />
                        <div className="flex p-4 pr-8 gap-6 justify-between">
                        <div className="flex gap-6">
                            <img src="https://placehold.co/132x70" alt="" />
                            <div className="flex flex-col gap-2">
                                <h2 className="text-base font-bold">Nissan GT - R</h2>
                                <p className="text-[#90A3BF] text-sm font-medium" >Sport Car</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-medium">20 July</p>
                            <h2 className="text-base font-bold">$80.00</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col p-6 bg-white rounded-lg items-center">
                <div className="pb-8">
                        <h1 className="pb-4 text-xl font-bold">Top 5 Car Rental</h1>
                        <div className="flex flex-col md:flex-row gap-4 p-6 bg-white rounded-lg items-center">
                        <div className="">
                            <canvas className="w-80 h-80 md:w-96 md:h-96" id="topCarRentalChart" width="400" height="400"></canvas>
                            <div className="text-center mt-4 text-lg font-semibold">
                                72,030 Rental Car
                            </div>
                        </div>
                            <div className="flex flex-col gap-8">
                                <div className="flex justify-between ">
                                    <div className="flex gap-1 items-center">
                                        <div className="rounded-full w-3 h-3 bg-[#0D3559]"></div>
                                        <p className="text-sm font-semibold" >Sport Car</p>
                                    </div>
                                    <div className="">
                                        <p className="text-sm font-semibold" > 17,439</p>
                                    </div>
                                </div>
                                <div className="flex justify-between ">
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
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
};

export default AdminDashboard;
