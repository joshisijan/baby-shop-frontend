import { createSlice } from "@reduxjs/toolkit";
import { fetchProductDetail } from "./productDetailAction";

const initialState = {
    isLoading: false,
    isLoaded: false,
    error: false,
    auth: false,
    activeSizeIndex: 0,
    selectedQuantity: 1,
    data: null,
}

const productDetailSlice = createSlice({
    name: 'productDetail',
    initialState,
    reducers: {
        setActiveSizeIndex: (state, { payload }) => {
            state.activeSizeIndex = payload
            state.selectedQuantity = 1
        },
        changeActiveColor: (state, { payload }) => {
            // setting active product detail
            state.activeSizeIndex = 0
            state.selectedQuantity = 1
            state.data.activeProductDetail = payload
        },
        setSelectedQuantity: (state, { payload }) => {
            state.selectedQuantity = payload
        },
        localAddWatchlist: (state) => {
            if (state.data !== null) {
                const tempActiveProductDetail = state.data.activeProductDetail
                tempActiveProductDetail.sizes[state.activeSizeIndex].in_wishlist = true
                state.data.activeProductDetail = tempActiveProductDetail
            }
        },
        localRemoveWatchlist: (state) => {
            if (state.data !== null) {
                const tempActiveProductDetail = state.data.activeProductDetail
                tempActiveProductDetail.sizes[state.activeSizeIndex].in_wishlist = false
                state.data.activeProductDetail = tempActiveProductDetail
            }
        },
    },
    extraReducers: {
        [fetchProductDetail.pending]: (state) => {
            if (!state.isLoaded) {
                state.isLoading = true
            }
        },
        [fetchProductDetail.rejected]: (state) => {
            state.isLoading = false
            if (!state.isLoaded) {
                state.data = {}
            }
            state.error = true
        },
        [fetchProductDetail.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            state.isLoaded = true
            state.error = false
            state.data = payload.responseData
            state.auth = payload.auth
            state.data.activeProductDetail = Object.values(state.data.product_variant)[0] // adding first product as active
        },
    },
});

export default productDetailSlice.reducer
export const {
    changeActiveColor,
    setActiveSizeIndex,
    setSelectedQuantity,
    localAddWatchlist,
    localRemoveWatchlist
} = productDetailSlice.actions