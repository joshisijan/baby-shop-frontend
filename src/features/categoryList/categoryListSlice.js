import { createSlice } from "@reduxjs/toolkit";
import { fetchCategoryList } from "./categoryListAction";

const initialState = {
    isLoading: false,
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
            state.isLoading = true
        },
        [fetchCategoryList.rejected]: (state) => {
            state.isLoading = false 
            state.error = true 
        },
        [fetchCategoryList.fulfilled]: (state, {payload}) => {
            state.isLoading = false 
            state.error = false
            state.data = payload
        },
    },
});

export default categoryListSlice.reducer