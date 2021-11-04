import { createSlice } from "@reduxjs/toolkit";
import orderStatusType from "../../constants/orderStatusType";
import { fetchOrderList } from "./orderAction";


const initialState = {
    isLoaded: false,
    isLoading: false,
    error: false,
    selectedFilter: orderStatusType.all,
    data: [],
}

const orderSlice = createSlice({
    name: 'order',
    initialState: initialState,
    reducers: {  
        setSelectedFilter: (state, {payload}) => {
            state.selectedFilter = payload
        },
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

export const { setSelectedFilter } = orderSlice.actions