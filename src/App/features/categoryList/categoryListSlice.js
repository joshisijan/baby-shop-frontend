import { createSlice } from "@reduxjs/toolkit";
import { fetchCategoryList, getNextCategoryList } from "./categoryListAction";

const initialState = {
    isLoading: false,
    isLoaded: false,
    isLoadingNext: false,
    error: false,
    data: {  
        next: null,
        results: [],
    },
}

const categoryListSlice = createSlice({  
    name: 'categoryList',
    initialState,
    reducers: {
    },    
    extraReducers: {
        [fetchCategoryList.pending]: (state) => {
            if(!state.isLoaded) {
                state.isLoading = true
            }
        },
        [fetchCategoryList.rejected]: (state) => {
            state.isLoading = false 
            state.error = true 
        },
        [fetchCategoryList.fulfilled]: (state, {payload}) => {
            state.isLoading = false 
            state.isLoaded = true
            state.error = false
            state.data = payload
        },
        // next 
        [getNextCategoryList.pending]: (state) => {
            state.isLoadingNext = true
        },
        [getNextCategoryList.rejected]: (state) => {
            state.isLoadingNext = false
        },
        [getNextCategoryList.fulfilled]: (state, { payload }) => {
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

export default categoryListSlice.reducer