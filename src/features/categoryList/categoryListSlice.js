import { createSlice } from "@reduxjs/toolkit";
import { fetchCategoryList } from "./categoryListAction";

const initialState = {
    isLoading: false,
    error: false,
    list: [],
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
            state.list = payload
        },
    },
});

export const { categoryListLoading, categoryListLoaded, categoryListError } = categoryListSlice.actions
export default categoryListSlice.reducer