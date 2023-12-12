import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    cars: [],
    loadingCars: false,
    carDetails: {},
    loadingCarDetails: {}
};

export const fetchCars = createAsyncThunk(
    'cars/fetchCars',
    async () => {
        const response = await axios.get(
            'https://car--rental-default-rtdb.europe-west1.firebasedatabase.app/.json/'
        );
        return response.data
    }
);

export const fetchCarDetails = createAsyncThunk(
    'cars/fetchCarDetails',
    async (key) => {
        const response = await axios.get(
            `https://car--rental-default-rtdb.europe-west1.firebasedatabase.app/cars/${key}/.json/`
        )
        return response.data
    }
);

export const addCar = createAsyncThunk(
    'cars/addCar',
    async (carItem) => {
        const response = await axios.post(
            `https://car--rental-default-rtdb.europe-west1.firebasedatabase.app/cars/.json/`,
            carItem
        );
        return response.data
    }
);

export const editCar = createAsyncThunk(
    'cars/editCar',
    async ({ values, key }) => {
        const response = await axios.put(
            `https://car--rental-default-rtdb.europe-west1.firebasedatabase.app/cars/${key}/.json/`,
            values
        );
        return response.data;
    }
);

export const deleteCar = createAsyncThunk(
    'cars/deleteCar',
    async () => {
        const response = await axios.delete(
            `https://car--rental-default-rtdb.europe-west1.firebasedatabase.app/cars/.json/`
        );
        return response.data
    }
);
const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            //products loading State
            .addCase(fetchCars.pending, (state) => {
                state.loadingCars = true
            })
            .addCase(fetchCars.fulfilled, (state, action) => {
                state.cars = action.payload;
                state.loadingCars = false;
            })
            .addCase(fetchCars.rejected, (state, action) => {
                state.loadingCars = false;
                state.error = action.error.message;
            })
            .addCase(fetchCarDetails.pending, (state) => {
                state.loadingCarDetails = true;
            })
            .addCase(fetchCarDetails.fulfilled, (state, action) => {
                state.carDetails = action.payload;
                state.loadingCarDetails = false;
            })
            .addCase(fetchCarDetails.rejected, (state, action) => {
                state.error = action.error.message;
                state.loadingCarDetails = false;
            })
            .addCase(addCar.fulfilled, (state, action) => {
                state.cars.push(action.payload)
            })
            .addCase(deleteCar.fulfilled, (state, action) => {
                state.cars = state.cars.filter((car) => car.key !== action.payload)
            })
            .addCase(editCar.fulfilled, (state, action) => {
                const editedCarIndex = state.cars.findIndex(car => car.key === action.payload.key);

                if (editedCarIndex !== -1) {
                    // Replace the old car data with the updated data
                    state.cars[editedCarIndex] = action.payload;
                }
            })
    },
});

export default carsSlice.reducer;