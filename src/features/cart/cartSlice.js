import { createSlice } from "@reduxjs/toolkit";
import { fetchCartList } from "./cartAction";

const initialState = {
    item: [],
}

const cartSlice = createSlice({  
    name: 'cart',
    initialState,
    reducers: {
    },  
    extraReducers: {
        [fetchCartList.fulfilled]:(state, {payload}) => {
            if(payload) {
                state.item = payload
            } else {
                state.item = []
            }
        } 
    }
});

export default cartSlice.reducer