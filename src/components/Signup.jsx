"use client"
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/firebase';
import LoginForm from '@/app/page';
import { useRouter } from 'next/navigation';

const Signup = () => {
    const [error, setError] = useState()
    const [showLoginForm, setShowLoginForm] = useState(false);  // Add state for showing LoginForm
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter()
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
            setIsLoading(true);
            createUserWithEmailAndPassword(auth, values.email, values.password)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    router.push("/home")
                    // ...
                })
                .catch((error) => {
                    console.error(error);
                    setError('An unexpected error occurred. Please try again.');

                    // You can check the error code to determine the type of error
                    switch (error.code) {
                        case 'auth/weak-password':
                            setError('Password should be at least 6 characters long.');
                            break;
                        case 'auth/email-already-in-use':
                            setError('The email address is already in use by another account.');
                            break;
                        case 'auth/invalid-email':
                            setError('The email address is invalid.');
                            break;
                        default:
                            setError('An unexpected error occurred. Please try again.');
                    }
                })
            .finally(() => {
                setIsLoading(false);
            }) 
        },
    });

    const showLogin = () => {
        setShowLoginForm(true);
    };

    // Conditional rendering based on showLoginForm state
    if (showLoginForm) {
        return <LoginForm />
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white text-black p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-bold mb-2">
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
                        <label htmlFor="password" className="block text-sm font-bold mb-2">
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
                        className={`bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600 relative ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={isLoading}
                    >
                        {isLoading && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="animate-spin h-5 w-5 border-t-2 border-b-2 border-blue-400"></div>
                            </div>
                        )}
                        {isLoading ? 'Loading...' : 'Register'}
                    </button>
                </form>
                <p className="text-sm text-center mt-4">
                    Already have an account?{' '}
                    <span
                        className="text-blue-500 hover:underline cursor-pointer"
                        onClick={showLogin}  // Call showLogin function on click
                    >
                        Login
                    </span>
                </p>
                {error && (
                    <div className="text-red-500 text-sm mt-4">
                        {error}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Signup;
