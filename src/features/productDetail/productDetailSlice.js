import { createSlice } from "@reduxjs/toolkit";
import { fetchProductDetail } from "./productDetailAction";

const initialState = {
    isLoading: false,
    error: false,
    data: null,
}

const productDetailSlice = createSlice({  
    name: 'productDetail',
    initialState,
    reducers: {
    },    
    extraReducers: {
        [fetchProductDetail.pending]: (state) => {
            state.isLoading = true
        },
        [fetchProductDetail.rejected]: (state) => {
            state.isLoading = false 
            state.error = true 
        },
        [fetchProductDetail.fulfilled]: (state, {payload}) => {
            state.isLoading = false 
            state.error = false
            state.data = payload
        },
    },
});

export default productDetailSlice.reducer