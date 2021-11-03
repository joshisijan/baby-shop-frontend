import { createSlice } from "@reduxjs/toolkit";
import { fetchCategoryList } from "./categoryListAction";

const initialState = {
    isLoading: false,
    isLoaded: false,
    error: false,
    data: {  
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
    },
});

export default categoryListSlice.reducer