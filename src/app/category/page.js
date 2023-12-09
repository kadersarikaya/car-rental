"use client"
import Card from "@/components/Card";
import React, {useState} from "react";

const CarCategory = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [price, setPrice] = useState(0);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const handlePriceChange = (e) => {
        setPrice(parseInt(e.target.value, 10));
    };

  return (
      <div className="flex md:justify-normal justify-center">
          <button
              className="absolute mt-1 p-1 rounded-md bg-indigo-400 text-white md:hidden right-4 "
              onClick={toggleSidebar}
          >
              {isSidebarOpen ? 'Close' : 'Open'}
          </button>
            <div className={`absolute md:sticky left-0 w-64 bg-white transform p-8 transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="flex flex-col gap-10">
                    <div className="">
                        <p className="pb-4 text-xs text-gray-400 font-semibold" >TYPE</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-1 items-center">
                                <input className="w-4 h-4" type="checkbox" name="" id="" />
                                <p className="font-md font-semibold text-gray-400">Sport</p>
                            </div>
                            <div className="flex gap-1 items-center">
                                <input className="w-4 h-4" type="checkbox" name="" id="" />
                                <p className="font-md font-semibold text-gray-400">SUV</p>
                            </div>
                            <div className="flex gap-1 items-center">
                                <input className="w-4 h-4" type="checkbox" name="" id="" />
                                <p className="font-md font-semibold text-gray-400">MVP</p>
                            </div>
                            <div className="flex gap-1 items-center">
                                <input className="w-4 h-4" type="checkbox" name="" id="" />
                                <p className="font-md font-semibold text-gray-400">Sedan</p>
                            </div>
                            <div className="flex gap-1 items-center">
                                <input className="w-4 h-4" type="checkbox" name="" id="" />
                                <p className="font-md font-semibold text-gray-400">Coupe</p>
                            </div>
                            <div className="flex gap-1 items-center">
                                <input className="w-4 h-4" type="checkbox" name="" id="" />
                                <p className="font-md font-semibold text-gray-400">Hatchback</p>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <p className="pb-4 text-xs text-gray-400 font-semibold" >CAPACITY</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-1 items-center">
                                <input className="w-4 h-4" type="checkbox" name="" id="" />
                                <p className="font-md font-semibold text-gray-400">2 Person</p>
                            </div>
                            <div className="flex gap-1 items-center">
                                <input className="w-4 h-4" type="checkbox" name="" id="" />
                                <p className="font-md font-semibold text-gray-400">4 Person</p>
                            </div>
                            <div className="flex gap-1 items-center">
                                <input className="w-4 h-4" type="checkbox" name="" id="" />
                                <p className="font-md font-semibold text-gray-400">6 Person</p>
                            </div>
                            <div className="flex gap-1 items-center">
                                <input className="w-4 h-4" type="checkbox" name="" id="" />
                                <p className="font-md font-semibold text-gray-400">8 or More</p>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <p className="pb-4 text-xs text-gray-400 font-semibold">PRICE</p>
                        <input
                            type="range"
                            min="0"
                            max="1000"  // Değiştirebilirsiniz
                            value={price}
                            onChange={handlePriceChange}
                            step="1"
                            className="input-range"
                        />
                        <div className="flex flex-col gap-2 font-md font-semibold text-gray-400">
                            Max. ${price}
                        </div>
                    </div>
                </div>
            </div>
          <div className="flex justify-center items-center flex-col p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card/>
                <Card/>
                <Card/>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
          </div>
      </div>
  );
};

export default CarCategory;
