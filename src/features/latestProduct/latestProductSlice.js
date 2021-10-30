import { createSlice } from "@reduxjs/toolkit";
import { fetchLatestProduct } from "./latestProductAction";

const initialState = {
    isLoading: false,
    error: false,
    data: [],
}

const latestProductSlice = createSlice({
    name: 'latestProduct',
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [fetchLatestProduct.pending]: (state) => {
            state.isLoading = true
        },
        [fetchLatestProduct.rejected]: (state) => {
            state.isLoading = false 
            state.error = true 
        },
        [fetchLatestProduct.fulfilled]: (state, {payload}) => {
            state.isLoading = false 
            state.error = false
            state.data = payload
        },
    },
});

export default latestProductSlice.reducer