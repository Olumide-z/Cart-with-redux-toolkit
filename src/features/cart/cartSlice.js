import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const url = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
    cartItems: [],
    amount: 4,
    total: 0,
    isLoading: true,
}

export const getCartItems = createAsyncThunk('cart/getCartItems', 
    async () => {
        try{
            const resp = await axios(url);
            // console.log(resp)
            return resp.data;
        }catch(error){
            console.log(error)
        }
    }
);

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = []
        },
        removeItem: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload)
        },
        increase: (state, action) => {
            const cartItem = state.cartItems.find((item) => item.id === action.payload.id);
            cartItem.amount = cartItem.amount + 1;
        },
        decrease: (state, action) => {
            const cartItem = state.cartItems.find((item) => item.id === action.payload.id);
            cartItem.amount = cartItem.amount - 1;
        },
        calculateTotals: (state, action) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
        },
    },
        extraReducers: {
            [getCartItems.pending]: (state) => {
                state.isLoading = true
            },
            [getCartItems.fulfilled]: (state, action) => {
                state.isLoading = false;
                state.cartItems = action.payload;
                console.log(action)
            },
            [getCartItems.rejected] : (state) => {
                state.isLoading = false;
            },
        }
});

export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;