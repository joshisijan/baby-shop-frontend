import { createSlice } from "@reduxjs/toolkit";
import { addToWishlistFromProduct, removeFromWishlistFromProduct,fetchWishlistList, getNextData, removeAllWishlist, removeFromWishlist } from "./wishlistAction";


const initialState = {
    isLoaded: false,
    isLoading: false,
    isLoadingNext: false,
    isAdding: false,
    isRemoving: false,
    isRemovingAll: false,
    error: false,
    data: null,
}

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: initialState,
    reducers: { 
        localRemoveWishlist: (state, {payload}) => {
            if(state.data !== null) {
                const tempData = state.data.results.filter((data) => data.inventory.id !== payload)
                state.data.results = tempData   
            }
        },
        localRemoveAllWishlist: (state) => {
            if(state.data !== null) {
                state.data.results = []
                state.data.next = null   
            }
        },

    },
    extraReducers: {
        // fetch
        [fetchWishlistList.pending]: (state) => {
            state.isLoading = true
        },
        [fetchWishlistList.rejected]: (state) => {
            state.isLoading = false
            state.data = {}
            state.error = true
        },
        [fetchWishlistList.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            state.isLoaded = true
            state.data = payload
        },
        // next
        [getNextData.pending]: (state) => {
            state.isLoadingNext = true
        },
        [getNextData.rejected]: (state) => {
            state.isLoadingNext = false
        },
        [getNextData.fulfilled]: (state, { payload }) => {
            state.isLoadingNext = false
            const temp = state.data //temp data to store previous data
            state.data = payload //setting prev data to new data
            const tempResult = [ //temp result to get all data 
                ...temp.results,
                ...state.data.results
            ]
            state.data.results = tempResult //setting new result to temp result
        },
        // add
        [addToWishlistFromProduct.pending]: (state) => {
            state.isAdding = true
        },
        [addToWishlistFromProduct.rejected]: (state) => {
            state.isAdding = false
        },
        [addToWishlistFromProduct.fulfilled]: (state, {payload}) => {
            state.isAdding = false
        },
        // remove
        [removeFromWishlist.pending]: (state) => {
            state.isRemoving = true
        },
        [removeFromWishlist.rejected]: (state) => {
            state.isRemoving = false
        },
        [removeFromWishlist.fulfilled]: (state) => {
            state.isRemoving = false
        },
        // remove through product
        [removeFromWishlistFromProduct.pending]: (state) => {
            state.isRemoving = true
        },
        [removeFromWishlistFromProduct.rejected]: (state) => {
            state.isRemoving = false
        },
        [removeFromWishlistFromProduct.fulfilled]: (state) => {
            state.isRemoving = false
        },
        // remove all
        [removeAllWishlist.pending]: (state) => {
            state.isRemovingAll = true
        },
        [removeAllWishlist.rejected]: (state) => {
            state.isRemovingAll = false
        },
        [removeAllWishlist.fulfilled]: (state) => {
            state.isRemovingAll = false
        },
    }
});


export default wishlistSlice.reducer

export const { 
    localRemoveWishlist, 
    localRemoveAllWishlist 
} = wishlistSlice.actions