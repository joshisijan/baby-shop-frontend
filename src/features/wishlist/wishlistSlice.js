import { createSlice } from "@reduxjs/toolkit";
import { addToWishlist, fetchWishlistList } from "./wishlistAction";


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
        // fetch
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
        // add
        [addToWishlist.pending]: (state) => {
            state.isAdding = true
        },
        [addToWishlist.error]: (state) => {
            state.isAdding = false
        },
        [addToWishlist.fulfilled]: (state) => {
            state.isAdding = false
        },
    }
});


export default wishlistSlice.reducer