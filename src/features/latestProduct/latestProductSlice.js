import { createSlice } from "@reduxjs/toolkit";
import { fetchLatestProduct, fetchNextLatestProduct } from "./latestProductAction";

const initialState = {
    isLoading: false,
    isLoadingNext: false,
    error: false,
    data: {
        count: 0,
        next: null,
        previous: null,
        results: [],
    },
}

const latestProductSlice = createSlice({
    name: 'latestProduct',
    initialState: initialState,
    reducers: {},
    extraReducers: {
        // fetch list
        [fetchLatestProduct.pending]: (state) => {
            state.isLoading = true
        },
        [fetchLatestProduct.rejected]: (state) => {
            state.isLoading = false 
            state.error = true 
        },
        [fetchLatestProduct.fulfilled]: (state, {payload}) => {
            state.isLoading = false 
            state.error = false
            state.data = payload
        },
        // fetch next page
        [fetchNextLatestProduct.pending]: (state) => {
            state.isLoadingNext = true
        },
        [fetchNextLatestProduct.rejected]: (state) => {
            state.isLoadingNext = false 
        },
        [fetchNextLatestProduct.fulfilled]: (state, {payload}) => {
            state.isLoadingNext = false 
            const temp = state.data //temp data to store previous data
            state.data = payload //setting prev data to new data
            const tempResult = [ //temp result to get all data 
                ...temp.results,
                ...state.data.results
            ]
            state.data.results = tempResult //setting new result to temp result
        },
    },
});

export default latestProductSlice.reducer