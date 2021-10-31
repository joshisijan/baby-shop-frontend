import { createSlice } from "@reduxjs/toolkit";
import { fetchProductDetail } from "./productDetailAction";

const initialState = {
    isLoading: false,
    error: false,
    data: {
        product: {},
        product_variant: {},
        activeProductDetail: { 
            sizes: [ 
                {
                    available_quantity: 1,
                }
            ],
        },
    },
}

const productDetailSlice = createSlice({
    name: 'productDetail',
    initialState,
    reducers: {
        changeActiveColor: (state, { payload }) => {
            // setting active product detail
            state.data.activeProductDetail = payload            
        }
    },
    extraReducers: {
        [fetchProductDetail.pending]: (state) => {
            state.isLoading = true
        },
        [fetchProductDetail.rejected]: (state) => {
            state.isLoading = false
            state.error = true
        },
        [fetchProductDetail.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            state.error = false
            state.data = payload
            state.data.activeProductDetail = Object.values(state.data.product_variant)[0] // adding first product as active
        },
    },
});

export default productDetailSlice.reducer
export const { changeActiveColor } = productDetailSlice.actions