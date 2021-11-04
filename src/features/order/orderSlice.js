import { createSlice } from "@reduxjs/toolkit";
import orderStatusType from "../../constants/orderStatusType";
import { fetchOrderList } from "./orderAction";


const initialState = {
    isLoaded: false,
    isLoading: false,
    error: false,
    selectedFilter: null,
    data: [],
    filteredData: [],
}

const orderSlice = createSlice({
    name: 'order',
    initialState: initialState,
    reducers: {  
        setSelectedFilter: (state, {payload}) => {
            state.selectedFilter = payload
            const tempFilteredData = []
            state.data.map((data) => {
                if(data.status === payload.label) {
                    return tempFilteredData.push(data)
                }
                return null
            })
            state.filteredData = tempFilteredData
        },
        resetSelectedFilter: (state) => {
            state.selectedFilter = null
            state.filteredData = []
        }
    },
    extraReducers: {  
        [fetchOrderList.pending]: (state) => {
            if(!state.isLoaded) {
                state.isLoading = true
            }
        },
        [fetchOrderList.error]: (state) => {
            state.isLoading = false 
            state.error = true
        },
        [fetchOrderList.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.isLoaded = true
            state.data = payload
        },
    }
});


export default orderSlice.reducer

export const { setSelectedFilter, resetSelectedFilter } = orderSlice.actions