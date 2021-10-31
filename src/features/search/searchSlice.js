import { createSlice } from "@reduxjs/toolkit";
import { search } from "./searchAction";

import searchFilterType from "../../constants/searchFilterType";


const initialState = {
    search: '',
    ordering: '',
    error: false,
    isLoading: false,
    data: {
        results: [],
    },
}

const searchSlice = createSlice({  
    name: 'search',
    initialState,
    reducers: {
        setSearchQuery: (state, {payload}) => {
            state.search = payload
        },
        resetSearchQuery: (state) => {
            state.search = ''
            state.ordering = ''
            state.error = false
            state.isLoading = false
            state.data = {
                results: []
            }
        },
    },  
    extraReducers: {
        [search.pending]: (state) => {
            state.isLoading = true
            state.error = false
        },
        [search.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.data = payload
            state.error = false
        },
        [search.rejected]: (state, {payload}) => {            
            if(payload) {
                state.isLoading = false
                state.error = true
            }
        },
    }
});

export default searchSlice.reducer
export const { setSearchQuery, resetSearchQuery } = searchSlice.actions 