import { configureStore } from "@reduxjs/toolkit";
import favoritesSlice from "./favoritesSlice";
import themeReducer from './themeSlice';

export const store = configureStore({
    reducer: {
        favorites: favoritesSlice,
        theme: themeReducer,
    },
})