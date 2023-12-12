import { configureStore } from "@reduxjs/toolkit";
import carsReducer from './carSlice'


export const store = configureStore({
    reducer: {
        cars: carsReducer,
    },
});