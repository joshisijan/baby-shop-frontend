import { createSlice } from "@reduxjs/toolkit";
import { addUserAddress, fetchUserAddress } from "./userAddressAction";

const initialState = {
    isLoading: false,
    isUpdating: false,
    isAdding: false,
    error: false,
    data: [],
}

const categoryListSlice = createSlice({  
    name: 'userAddress',
    initialState,
    reducers: {
    },    
    extraReducers: {
        [fetchUserAddress.pending]: (state) => {
            state.isLoading = true
        },
        [fetchUserAddress.rejected]: (state) => {
            state.isLoading = false 
            state.error = true 
        },
        [fetchUserAddress.fulfilled]: (state, {payload}) => {
            state.isLoading = false 
            state.error = false
            state.data = payload
        },
        [addUserAddress.pending]: (state) => {
            state.isAdding = true
        },
        [addUserAddress.rejected]: (state) => {
            state.isAdding = false 
            state.error = true 
        },
        [addUserAddress.fulfilled]: (state) => {
            state.isAdding = false 
            state.error = false
        },
    },
});

export default categoryListSlice.reducer