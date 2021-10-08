import { createSlice } from "@reduxjs/toolkit";
import { registration } from './registrationAction'

const initialState = {
    isLoading: false,
    error: null,
}

const registerSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        registerError: (state, { payload }) => {
            state.isLoading = false
            state.error = payload
        },
        hideRegisterError: (state) => {
            state.error = null
        },
    },
    extraReducers: {
        [registration.pending]: (state) => {
            state.isLoading = true
        },
        [registration.rejected]: (state, { payload }) => {            
            state.isLoading = false
            state.error = payload
        },
        [registration.fulfilled]: (state) => {
            state.isLoading = false
            state.error = null
        },
    }
})


export const { registerError, hideRegisterError } = registerSlice.actions
export default registerSlice.reducer
