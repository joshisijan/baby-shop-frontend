import { createSlice } from "@reduxjs/toolkit";
import { fetchOrderList, getNextData } from "./orderAction";


const initialState = {
    isLoading: false,
    isLoaded: false,
    isLoadingNext: false,
    error: false,
    selectedFilter: {
        label: '',
    },
    data: null,
}

const orderSlice = createSlice({
    name: 'order',
    initialState: initialState,
    reducers: {
        setSelectedFilter: (state, { payload }) => {
            state.isLoaded = false
            state.selectedFilter = payload
        },
        resetSelectedFilter: (state) => {
            state.isLoaded = false
            state.selectedFilter = initialState.selectedFilter
        }
    },
    extraReducers: {
        // fetch list
        [fetchOrderList.pending]: (state) => {
            if (!state.isLoaded) {
                state.isLoading = true
                state.data = null
            }
        },
        [fetchOrderList.rejected]: (state) => {
            state.isLoading = false
            state.data = {}
            state.error = true
        },
        [fetchOrderList.fulfilled]: (state, { payload }) => {
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
    }
});


export default orderSlice.reducer

export const { setSelectedFilter, resetSelectedFilter } = orderSlice.actions