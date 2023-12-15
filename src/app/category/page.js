"use client"
import Card from "@/components/Card";
import React, {useState, useEffect} from "react";
import axios from "axios";
import { selectTheme } from '@/store/themeSlice';
import { useSelector } from "react-redux";

const CarCategory = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [price, setPrice] = useState(0);
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filteredCars, setFilteredCars] = useState([])

    const isDarkMode = useSelector(selectTheme);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://car-rental-api-0vx2.onrender.com/cars");
                setCars(response.data);
                setFilteredCars(response.data)
                setLoading(false);
            } catch (error) {
                console.error("Error fetching cars: ", error);
            }
        };

        fetchData();
    }, []);

    const carTypes = Array.from(new Set(cars.map((car) => car.type)));
    const capacity = Array.from(new Set(cars.map((car) => car.capacity)));

    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedCapacities, setSelectedCapacities] = useState([]);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const handleTypeChange = (type) => {
        setSelectedTypes((prevTypes) =>
            prevTypes.includes(type) ? prevTypes.filter((t) => t !== type) : [...prevTypes, type]
        );
    };

    const handlePriceChange = (e) => {
        setPrice(parseInt(e.target.value, 10));
        console.log(price)
    };

    const handleCapacityChange = (capacity) => {
        setSelectedCapacities((prevCapacities) =>
            prevCapacities.includes(capacity) ? 
            prevCapacities.filter((c) => c !== capacity) : [...prevCapacities, capacity]
        );
    };

    useEffect(() => {
        // Filter cars based on selected types, capacities, and price
        const filtered = cars.filter(
            (car) =>
                (selectedTypes.length == 0 || selectedTypes.includes(car.type)) &&
                (selectedCapacities.length == 0 || 
                    selectedCapacities.includes(car.capacity)) &&
                car.price <= price
        );

        setFilteredCars(filtered);
    }, [selectedTypes, selectedCapacities, price]);
    
    return (
        <div className="flex md:justify-normal justify-center">
            <button
                className="absolute mt-1 p-1 rounded-md bg-indigo-400 text-white md:hidden right-4 "
                onClick={toggleSidebar}
            >
                {isSidebarOpen ? 'Close' : 'Open'}
            </button>
            <div className={`absolute md:sticky left-0 w-64 ${isDarkMode ? "bg-[#333] text-white" : "bg-white text-black" } transform p-8 transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                        }`}
                >
                    <div className="flex flex-col gap-10">
                        <div className="">
                            <p className="pb-4 text-xs text-gray-400 font-semibold" >TYPE</p>
                            <div className="flex flex-col gap-4">
                            {carTypes.map((type)=> (
                                type &&
                                <div key={type} className="flex gap-1 items-center">
                                    <input
                                        className="w-4 h-4"
                                        type="checkbox"
                                        name={type}
                                        id={type}
                                        onChange={() => handleTypeChange(type)}
                                        checked={selectedTypes.includes(type)}
                                    />
                                    <p className="font-semibold text-gray-400">{type}</p>
                                </div>
                                ))}
                            </div>
                        </div>
                        <div className="">
                            <p className="pb-4 text-xs text-gray-400 font-semibold" >CAPACITY</p>
                        <div className="flex flex-col gap-4">
                            {capacity.map((cap) => (
                                cap &&
                                <div key={cap} className="flex gap-1 items-center">
                                    <input
                                        className="w-4 h-4"
                                        type="checkbox"
                                        name={cap}
                                        id={cap}
                                        onChange={() => handleCapacityChange(cap)}
                                        checked={selectedCapacities.includes(cap)}
                                    />
                                    <p className="font-semibold text-gray-400">{cap} Person</p>
                                </div>
                            ))}
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
                            <div className="flex flex-col gap-2 font-semibold text-gray-400">
                                Max. ${price}
                            </div>
                        </div>
                    </div>
                </div>
            <div className="flex justify-center items-center flex-col p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredCars.map((car)=> (
                        <Card car={car} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CarCategory;
