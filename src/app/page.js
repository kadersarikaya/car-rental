"use client"
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/firebase';
import { useRouter } from 'next/navigation';
import Signup from '@/components/Signup';

const LoginForm = () => {
    const router = useRouter()
    const [error, setError] = useState()
    const [showSignupForm, setShowSignupForm] = useState(false);  // Add state for showing SignupForm

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Enter a valid email address').required('Email is required'),
            password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        }),
        onSubmit: (values) => {
            signInWithEmailAndPassword(auth, values.email, values.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    router.push("/home")
                })
                .catch((error) => {
                    setError(error)
                });
        },
    });

    // Function to show SignupForm
    const showSignup = () => {
        setShowSignupForm(true);
    };

    // Conditional rendering based on showSignupForm state
    if (showSignupForm) {
        return <Signup/>
    }

    return (
        <div className="bg-gray-200 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={`w-full p-2 border rounded ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`}
                            required
                        />
                        {formik.touched.email && formik.errors.email && (
                            <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={`w-full p-2 border rounded ${formik.touched.password && formik.errors.password ? 'border-red-500' : ''}`}
                            required
                        />
                        {formik.touched.password && formik.errors.password && (
                            <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600"
                    >
                        Login
                    </button>
                    <p className="text-red-500 text-sm mt-1">{error}</p>
                </form>
                <p className="text-sm text-center mt-4">
                    Don't have an account?{' '}
                    <span
                        className="text-blue-500 hover:underline cursor-pointer"
                        onClick={showSignup}  // Call showSignup function on click
                    >
                        Sign Up
                    </span>
                </p>
            </div>
        </div>
    );
};

export default LoginForm;
