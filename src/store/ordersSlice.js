import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orders: [],
    totalAmount: 0,
};

export const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        addToOrders: (state, action) => {
            const car = action.payload;
            state.orders.push(car);
            state.totalAmount = state.orders.reduce((total,item) => 
                total + item.price, 0
            )
        },
    },
});

export const { addToOrders } = ordersSlice.actions;

export default ordersSlice.reducer;

