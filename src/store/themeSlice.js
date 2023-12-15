// src/store/slices/themeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const loadThemeFromLocalStorage = () => {
    if (typeof window !== 'undefined') {
        try {
            const storedTheme = JSON.parse(localStorage.getItem('theme'));
            return storedTheme ? storedTheme.isDarkMode : false;
        } catch (error) {
            console.error('Error parsing theme from local storage', error);
            return false;
        }
    }
    return false;
};


export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        isDarkMode: loadThemeFromLocalStorage() || "",
    },
    reducers: {
        toggleTheme: (state) => {
            state.isDarkMode = !state.isDarkMode;
            if (typeof window !== 'undefined') {
                localStorage.setItem('theme', JSON.stringify({ isDarkMode: state.isDarkMode }));
            }
        },
    },
    extraReducers: (builder) => {
        if (typeof window !== 'undefined') {
        builder
            .addDefaultCase((state) => {
                const storedTheme = JSON.parse(localStorage.getItem('theme'));
                if (storedTheme) {
                    state.isDarkMode = storedTheme.isDarkMode;
                }
            });
        }
    },
});

export const { toggleTheme } = themeSlice.actions;

export const selectTheme = (state) => state.theme.isDarkMode;

export default themeSlice.reducer;
