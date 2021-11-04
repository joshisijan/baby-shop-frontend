import { createSlice } from "@reduxjs/toolkit";
import { fetchOrderList } from "./orderAction";


const initialState = {
    isLoading: false,
    error: false,
    selectedFilter: null,
    data: null,
}

const orderSlice = createSlice({
    name: 'order',
    initialState: initialState,
    reducers: {
        setSelectedFilter: (state, { payload }) => {
            state.selectedFilter = payload
        },
        resetSelectedFilter: (state) => {
            state.selectedFilter = null
        }
    },
    extraReducers: {
        // fetch list
        [fetchOrderList.pending]: (state) => {
            state.isLoading = true
            state.data = null
        },
        [fetchOrderList.error]: (state) => {
            state.isLoading = false
            state.data = {}
            state.error = true
        },
        [fetchOrderList.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            state.data = payload
        },
    }
});


export default orderSlice.reducer

export const { setSelectedFilter, resetSelectedFilter } = orderSlice.actions