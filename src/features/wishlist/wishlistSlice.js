import { createSlice } from "@reduxjs/toolkit";
import { fetchWishlistList } from "./wishlistAction";


const initialState = {
    isLoaded: false,
    isLoading: false,
    isAdding: false,
    error: false,
    data: [],
}

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: initialState,
    reducers: {},
    extraReducers: {  
        [fetchWishlistList.pending]: (state) => {
            if(!state.isLoaded) {
                state.isLoading = true
            }
        },
        [fetchWishlistList.error]: (state) => {
            state.isLoading = false 
            state.error = true
        },
        [fetchWishlistList.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.isLoaded = true
            state.data = payload
        },
    }
});


export default wishlistSlice.reducer