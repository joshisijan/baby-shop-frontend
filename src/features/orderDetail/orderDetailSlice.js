import { createSlice } from "@reduxjs/toolkit";
import { fetchOrderDetail } from "./orderDetailAction";


const initialState = {
    isLoading: false,
    error: false,
    data: null,
}

const orderSlice = createSlice({
    name: 'orderDetail',
    initialState: initialState,
    reducers: {},
    extraReducers: {
        // fetch list
        [fetchOrderDetail.pending]: (state) => {
            state.isLoading = true
            state.data = null
        },
        [fetchOrderDetail.rejected]: (state) => {
            state.isLoading = false
            state.data = {} // to show error not loading
            state.error = true
        },
        [fetchOrderDetail.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            state.data = payload
        },
    }
});


export default orderSlice.reducer

export const { setSelectedFilter, resetSelectedFilter } = orderSlice.actions