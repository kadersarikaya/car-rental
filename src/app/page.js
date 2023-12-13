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
    const [isLoading, setIsLoading] = useState(false);
    const [userRole, setUserRole] = useState("user")
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
            signInWithEmailAndPassword(auth, values.email, values.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    const userRole = getUserRole();

                    if (userRole === 'admin') {
                        // User is an admin, redirect to /admin
                        router.push('/admin');
                    } else {
                        // User is not an admin, redirect to /home or another page
                        router.push('/home');
                    }
                })
                .catch((error) => {
                    setError(error.message);

                    // Check the error code to determine the type of error
                    if (error.code === 'auth/user-not-found') {
                        setError('User not found. Please check your email or sign up.');
                    } else if (error.code === 'auth/wrong-password') {
                        setError('Incorrect password. Please try again.');
                    } else {
                        console.error(error);
                    }
                })
                .finally(() => {
                    setIsLoading(false); 
                }) 
        },
    });

    const getUserRole = () => {
        if (formik.values.email === 'admin@morent.com' && formik.values.password === 'admin.0123') {
            return 'admin';
        }
        else {
            return 'user';
        }
    };
    // Function to show SignupForm
    const showSignup = () => {
        setShowSignupForm(true);
    };

    // Conditional rendering based on showSignupForm state
    if (showSignupForm) {
        return <Signup />
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
                        className={`bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600 relative ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={isLoading}
                    >
                        {isLoading && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="animate-spin h-5 w-5 border-t-2 border-b-2 border-blue-400"></div>
                            </div>
                        )}
                        {isLoading ? 'Loading...' : 'Login'}
                    </button>
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
                {error && (
                    <div className="text-red-500 text-sm mt-4">
                        {error}
                    </div>
                )}
            </div>
        </div>
    );
};

export default LoginForm;
