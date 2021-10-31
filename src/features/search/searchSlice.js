import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: '',
    ordering: '',
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
        }
    },  
    extraReducers: {
    }
});

export default searchSlice.reducer
export const { setSearchQuery, resetSearchQuery } = searchSlice.actions 