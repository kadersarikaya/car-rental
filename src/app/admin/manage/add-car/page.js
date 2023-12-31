// AddCarPage.js
"use client"
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    price: Yup.number().positive("Price must be a positive number").required("Price is required"),
    carImage: Yup.string().url("Invalid image URL").required("Image URL is required"),
    type: Yup.string().required("Type is required"),
    capacity: Yup.number().required("Capacity is required"),
    description: Yup.string()
        .min(2, 'Too short')
        .max(250, 'Too long')
        .required('Description is required'),
});

const AddCarPage = () => {
    const formik = useFormik({
            initialValues: {
            title: "",
            price: "",
            carImage: "",
            description: "",
            type: "", 
            capacity: ""
        },
        validationSchema,
        onSubmit: async (values) => {
            try {
                await axios.post("https://car-rental-api-0vx2.onrender.com/cars", values);
                toast.success('Car added successfully'); 
            } catch (error) {
                console.error("Error adding car: ", error);
            }
        },
    });

    return (
        <div className="container mx-auto p-8 ">
            <h1 className="text-3xl font-bold mb-8">Add New Car</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-bold mb-2">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.title}
                        className={`border-2 rounded w-full py-2 px-3 ${formik.touched.title && formik.errors.title ? "border-red-500" : "border-gray-300"
                            }`}
                    />
                    {formik.touched.title && formik.errors.title && (
                        <p className="text-red-500 text-sm mt-1">{formik.errors.title}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block text-sm font-bold mb-2">
                        Price
                    </label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.price}
                        className={`border-2 rounded w-full py-2 px-3 ${formik.touched.price && formik.errors.price ? "border-red-500" : "border-gray-300"
                            }`}
                    />
                    {formik.touched.price && formik.errors.price && (
                        <p className="text-red-500 text-sm mt-1">{formik.errors.price}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="carImage" className="block text-sm font-bold mb-2">
                        Car Image URL
                    </label>
                    <input
                        type="text"
                        id="carImage"
                        name="carImage"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.carImage}
                        className={`border-2 rounded w-full py-2 px-3 ${formik.touched.carImage && formik.errors.carImage ? "border-red-500" : "border-gray-300"
                            }`}
                    />
                    {formik.touched.carImage && formik.errors.carImage && (
                        <p className="text-red-500 text-sm mt-1">{formik.errors.carImage}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-bold mb-2">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.description}
                        className={`border-2 rounded w-full py-2 px-3 ${formik.touched.description 
                            && formik.errors.description ? "border-red-500" : "border-gray-300"
                            }`}
                    />
                    {formik.touched.description && formik.errors.description && (
                        <p className="text-red-500 text-sm mt-1">{formik.errors.description}</p>
                    )}
                </div>
                    <div className="mb-4">
                        <label htmlFor="type" className="block text-sm font-bold mb-2">
                            Car Type
                        </label>
                        <select
                            id="type"
                            name="type"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.type}
                            className={`border-2 rounded w-full py-2 px-3 ${formik.touched.type && formik.errors.type ? "border-red-500" : "border-gray-300"
                                }`}
                        >
                            <option value="" label="Select Car Type" />
                            <option value="Coupe" label="Coupe" />
                            <option value="Sedan" label="Sedan" />
                            <option value="Hatchback" label="Hatchback" />
                            <option value="Electric" label="Electric" />
                            <option value="SUV" label="SUV" />
                        </select>
                        {formik.touched.type && formik.errors.type && (
                            <p className="text-red-500 text-sm mt-1">{formik.errors.type}</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="type" className="block text-sm font-bold mb-2">
                            Car Capacity
                        </label>
                    <input
                        type="number"
                        id="capacity"
                        name="capacity"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.capacity}
                        className={`border-2 rounded w-full py-2 px-3 ${formik.touched.capacity &&
                            formik.errors.capacity ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    {formik.touched.capacity && formik.errors.capacity && (
                        <p className="text-red-500 text-sm mt-1">{formik.errors.capacity}</p>
                    )}
                    </div>
                <div>
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                        Add Car
                    </button>
                </div>
            </form>
            <ToastContainer position="bottom-right" autoClose={3000} />
        </div>
    );
};

export default AddCarPage;

