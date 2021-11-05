import { createSlice } from "@reduxjs/toolkit";
import { fetchCategoryProduct, fetchNextCategorProduct } from "./categoryProductAction";

const initialState = {
    isLoading: false,
    isLoaded: false,
    isLoadingNext: false,
    error: false,
    data: null,
}

const categoryProductSlice = createSlice({
    name: 'categoryProduct',
    initialState: initialState,
    reducers: {},
    extraReducers: {
        // fetch list
        [fetchCategoryProduct.pending]: (state) => {
            if(!state.isLoaded) {
                state.isLoading = true
            }
        },
        [fetchCategoryProduct.rejected]: (state) => {
            state.isLoading = false 
            state.error = true 
        },
        [fetchCategoryProduct.fulfilled]: (state, {payload}) => {
            state.isLoading = false 
            state.isLoaded = true
            state.error = false
            state.data = payload
        },
        // fetch next page
        [fetchNextCategorProduct.pending]: (state) => {
            state.isLoadingNext = true
        },
        [fetchNextCategorProduct.rejected]: (state) => {
            state.isLoadingNext = false 
        },
        [fetchNextCategorProduct.fulfilled]: (state, {payload}) => {
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

export default categoryProductSlice.reducer