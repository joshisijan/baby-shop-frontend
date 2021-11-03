import { createSlice } from "@reduxjs/toolkit";
import { fetchProductDetail } from "./productDetailAction";

const initialState = {
    isLoading: false,
    isLoaded: false,
    error: false,
    auth: false,
    activeSizeIndex: 0,
    selectedQuantity: 1,
    data: {
        product: {
            id: 1,
        },
        product_variant: {},
        activeProductDetail: { 
            sizes: [ 
                {
                    available_quantity: 1,
                    max_qty_for_cart: 1,
                }
            ],
        },
    },
}

const productDetailSlice = createSlice({
    name: 'productDetail',
    initialState,
    reducers: {
        setActiveSizeIndex: (state, {payload}) => {
            state.activeSizeIndex = payload
        },
        changeActiveColor: (state, { payload }) => {
            // setting active product detail
            state.activeSizeIndex = 0
            state.selectedQuantity = 1
            state.data.activeProductDetail = payload            
        },
        setSelectedQuantity: (state, {payload}) => {
            state.selectedQuantity = payload
        }
    },
    extraReducers: {
        [fetchProductDetail.pending]: (state) => {
            if(!state.isLoaded) {
                state.isLoading = true
            }
        },
        [fetchProductDetail.rejected]: (state) => {
            state.isLoading = false
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
export const { changeActiveColor, setActiveSizeIndex, setSelectedQuantity } = productDetailSlice.actions