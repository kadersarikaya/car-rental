// components/ThemeProvider.js
"use client"
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from '@/store/themeSlice';

const ThemeProvider = ({ children }) => {
    const dispatch = useDispatch();
    const isDarkMode = useSelector(selectTheme);

    useEffect(() => {
        document.body.classList.toggle('dark', isDarkMode);
    }, [isDarkMode]);

    return <>{children}</>;
};

export default ThemeProvider;
