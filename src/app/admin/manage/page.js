// Admincars.js
"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Admincars = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:4000/cars");
                setCars(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching cars: ", error);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/cars/${id}`);
           const filtered = cars.filter((car)=>car.id!=id)
           setCars(filtered)
            toast.success('Car deleted successfully'); 
        } catch (error) {
            console.error("Error deleting car: ", error);
        }
    };

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-8">
                <div className=""></div>
                <Link href='/admin/manage/add-car'>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">+ Add car</button>
                </Link>
            </div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {cars.map((car) => (
                        <div key={car.id} className="bg-white text-black p-4 rounded-lg shadow-md">
                            <img
                                src={car.carImage}
                                alt={car.title}
                                className="w-full h-32 object-cover mb-4 rounded-md"
                            />
                            <h2 className="text-lg font-bold mb-2">{car.title}</h2>
                            <p className="text-gray-600 mb-4">${car.price}</p>
                            <div className="flex justify-between items-center">
                                <Link href={`/admin/manage/edit-car/${car.id}`}>
                                    <button
                                        className="text-blue-500 hover:underline"
                                    >
                                        Edit
                                    </button>
                                </Link>
                                <button
                                    onClick={() => handleDelete(car.id)}
                                    className="text-red-500 hover:underline"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <ToastContainer position="bottom-right" autoClose={3000} />
        </div>
    );
};

export default Admincars;
