// Admincars.js
"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";

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

    const handleEdit = (carId) => {
        // Düzenleme işlemleri burada yapılabilir.
        console.log("Edit car with ID:", carId);
    };

    const handleDelete = (carId) => {
        // Silme işlemleri burada yapılabilir.
        console.log("Delete car with ID:", carId);
    };

    return (
        <div className="container mx-auto p-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Car List</h1>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">+ Add car</button>
            </div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {cars.map((car) => (
                        <div key={car.id} className="bg-white p-4 rounded-lg shadow-md">
                            <img
                                src={car.carImage}
                                alt={car.title}
                                className="w-full h-32 object-cover mb-4 rounded-md"
                            />
                            <h2 className="text-lg font-bold mb-2">{car.title}</h2>
                            <p className="text-gray-600 mb-4">${car.price}</p>
                            <div className="flex justify-between items-center">
                                <button
                                    onClick={() => handleEdit(car.id)}
                                    className="text-blue-500 hover:underline"
                                >
                                    Edit
                                </button>
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
        </div>
    );
};

export default Admincars;
