"use client"
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '@/components/Button';
import Rating from '@/components/Rating';

const Payment = () => {
    const initialValues = {
        name: '',
        phone: '',
        address: '',
        city: '',
    };

    const validationSchema = Yup.object({
        name: Yup.string().min(3, 'Name must be at least 3 characters').required('Name is required'),
        phone: Yup.string()
            .matches(/^\d{10}$/, 'Phone must be 10 digits')
            .required('Phone is required'),
        address: Yup.string().min(3, 'Address must be at least 3 characters').required('Address is required'),
        city: Yup.string().min(3, 'City must be at least 3 characters').required('City is required'),
    });

    const handleSubmit = (values) => {
        console.log('Form submitted:', values);
    };

    return (
        <div className="flex flex-col lg:flex-row max-h-max justify-around px-8 pt-8 pb-24">
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
            <div className="max-w-lg w-full lg:w-1/2 h-fit flex flex-col gap-8 flex-1 p-8 bg-white rounded-md shadow-md">
                <h1 className="text-2xl font-bold mb-6">Rental Summary</h1>
                <div className="flex gap-6 items-center">
                    <img src="https://via.placeholder.com/132x108" alt="" />
                    <div className="">
                        <h1 className='text-3xl font-bold' >Nissan GT - R</h1>
                        <Rating value={2.5} />
                    </div>
                </div>
                <hr />
                <div className="flex flex-col gap-6">
                    <div className="flex justify-between">
                        <p className='text-gray-400 font-medium text-base'>Subtotal</p>
                        <p className='font-semibold text-base'>$80.00</p>
                    </div>
                    <div className="flex justify-between">
                        <p className='text-gray-400 font-medium text-base'>Tax</p>
                        <p className='font-semibold text-base'>$0</p>
                    </div>
                    <div className="flex pt-4 justify-between">
                        <p className='text-xl font-bold' >Total Rental Price</p>
                        <p className='font-bold text-3xl' >$80.00</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
