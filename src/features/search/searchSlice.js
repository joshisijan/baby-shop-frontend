import { createSlice } from "@reduxjs/toolkit";
import { getNextData, search } from "./searchAction";


const initialState = {
    search: '',
    ordering: '',
    error: false,
    nextIsLoading: false,
    isLoading: false,
    data: {
        next: null,
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
            if(state.search !== '' || state.ordering !== '') {
                return initialState
            }
        },
        setFilter: (state, {payload}) => {
            state.ordering = payload
        },
        resetFilter: (state) => {
            state.ordering = ''
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
        [getNextData.pending]: (state) => {
            state.nextIsLoading = true
        },
        [getNextData.fulfilled]: (state, {payload}) => {
            state.nextIsLoading = false
            const temp = state.data //temp data to store previous data
            state.data = payload //setting prev data to new data
            const tempResult = [ //temp result to get all data 
                ...temp.results,
                ...state.data.results
            ]
            state.data.results = tempResult //setting new result to temp result 
        },
        [getNextData.rejected]: (state, {payload}) => {
            state.nextIsLoading = false        
        },
    }
});

export default searchSlice.reducer
export const { setSearchQuery, resetSearchQuery, setFilter, resetFilter } = searchSlice.actions 