import { createSlice } from "@reduxjs/toolkit";
import { fetchProductDetail } from "./productDetailAction";

const initialState = {
    isLoading: false,
    error: false,
    data: {
        product: {},
        product_inventory: [],
        product_image: [],
        activeProductDetail: null,
        activeProductImage: [],
    },
}

const productDetailSlice = createSlice({
    name: 'productDetail',
    initialState,
    reducers: {
        changeActiveColor: (state, { payload }) => {
            // getting color id
            const colorId = payload
            // selecting suitable color 
            let temp = state.data.product_inventory.find(product => product.product_color.color.id === colorId)
            if(temp !== null) state.data.activeProductDetail = temp
             // getting color id from state for image
             const colorIdImage = state.data.activeProductDetail.product_color.id
             // filtering image of specific product
             let tempImages = state.data.product_image.filter(product => product.product_color === colorIdImage)
             state.data.activeProductImage = tempImages
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
            state.data.activeProductDetail = state.data.product_inventory[0] // adding first product as active
            if (state.data.activeProductDetail !== null) {
                // getting color id
                const colorId = state.data.activeProductDetail.product_color.id
                // filtering image of specific product
                let tempImages = state.data.product_image.filter(product => product.product_color === colorId)
                state.data.activeProductImage = tempImages
            }
        },
    },
});

export default productDetailSlice.reducer
export const { changeActiveColor } = productDetailSlice.actions