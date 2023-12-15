"use client"
import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '@/components/Button';
import Rating from '@/components/Rating';
import { useParams } from "next/navigation";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Payment = () => {
    const initialValues = {
        name: '',
        phone: '',
        address: '',
        city: '',
    };

    const [car, setCar] = useState();
    const { id } = useParams()
    const [loading,setLoading] = useState(false)

    console.log(id)
    const getCar = async () => {
        try {
            const res = await axios.get(`http://localhost:4000/cars/${id}`)
            setCar(res.data)
        }
        catch (error) {
            console.log(error);
        }
    }

    const makeOrder = async () => {
        try {
            const res = await axios.post('http://localhost:4000/orders/', car)
            const order = res.data;
            toast.success(`Order has been placed successfully!`);
            if(ordersSlice.find((order)))
            return order;
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCar()
        console.log(car);
    }, [id])

    const validationSchema = Yup.object({
        name: Yup.string().min(3, 'Name must be at least 3 characters').required('Name is required'),
        phone: Yup.string()
            .matches(/^\d{10}$/, 'Phone must be 10 digits')
            .required('Phone is required'),
        address: Yup.string().min(3, 'Address must be at least 3 characters').required('Address is required'),
        city: Yup.string().min(3, 'City must be at least 3 characters').required('City is required'),
    });

    const handleSubmit = () => {
        makeOrder()
    };

    return (
        <div className="flex flex-col lg:flex-row max-h-max justify-center gap-8 px-4 pt-8 pb-24">
            <div className="max-w-lg w-full lg:w-1/2 h-fit flex flex-col gap-8 flex-1 p-8 bg-white rounded-md shadow-md">
                <h1 className="text-2xl font-bold mb-6">Rental Summary</h1>
                <div className="items-center">
                    <img src={car?.carImage} alt="" />
                    <div className="">
                        <h1 className='text-2xl md:text-3xl font-bold py-1' >{car?.title}</h1>
                        <Rating value={car?.rating} />
                    </div>
                </div>
                <hr />
                <div className="flex flex-col gap-6">
                    <div className="flex justify-between">
                        <p className='text-gray-400 font-medium text-base'>Subtotal</p>
                        <p className='font-semibold text-base'>{car?.price}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className='text-gray-400 font-medium text-base'>Tax</p>
                        <p className='font-semibold text-base'>$0</p>
                    </div>
                    <div className="flex pt-4 justify-between">
                        <p className='text-xl font-bold' >Total Rental Price</p>
                        <p className='font-bold text-3xl' >${car?.price}</p>
                    </div>
                </div>
            </div>
            <div className="max-w-lg w-full lg:w-1/2 h-fit flex-1 p-8 bg-white rounded-md shadow-md mb-8 lg:mb-0">
                <h1 className="text-2xl font-bold mb-6">Billing Info</h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                                Name
                            </label>
                            <Field
                                type="text"
                                id="name"
                                name="name"
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            />
                            <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
                                Phone
                            </label>
                            <Field
                                type="tel"
                                id="phone"
                                name="phone"
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            />
                            <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="address" className="block text-sm font-medium text-gray-600">
                                Address
                            </label>
                            <Field
                                type="text"
                                id="address"
                                name="address"
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            />
                            <ErrorMessage name="address" component="div" className="text-red-500 text-sm" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="city" className="block text-sm font-medium text-gray-600">
                                Town/City
                            </label>
                            <Field
                                type="text"
                                id="city"
                                name="city"
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            />
                            <ErrorMessage name="city" component="div" className="text-red-500 text-sm" />
                        </div>
                        <div className="mt-6">
                            <Button
                                btntext='Rent Now'
                                type='submit'
                            /> 
                        </div>
                    </Form>
                </Formik>
            </div>
            <ToastContainer position="bottom-right" autoClose={3000} />
        </div>
    );
};

export default Payment;
