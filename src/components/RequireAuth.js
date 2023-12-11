"use client"
import React from "react";
import { useRouter } from "next/navigation";

const RequireAuth = ({children}) => {
  const router = useRouter()
  const currentUser = false
  
    if (!currentUser && !['/'].includes(router.pathname)) {
        router.push('/')
        return children; // or loading spinner or some indicator while redirecting
    }

    // If user is logged in but trying to access admin, redirect to home
    if (currentUser && router.pathname.startsWith('/admin')) {
        router.push('/home');
        return children;
    }
};

export default RequireAuth;
