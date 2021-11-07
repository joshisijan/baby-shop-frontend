import { createSlice } from "@reduxjs/toolkit";
import { login } from './loginAction'

const initialState = {
    isLoading: false,
    error: null,
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginError: (state, { payload }) => {
            state.isLoading = false
            state.error = payload
        },
        hideLoginError: (state) => {
            state.error = null
        },
    },
    extraReducers: {
        [login.pending]: (state) => {
            state.isLoading = true
        },
        [login.rejected]: (state, { payload }) => {
            state.isLoading = false
            state.error = payload
        },
        [login.fulfilled]: (state) => {
            state.isLoading = false
            state.error = null
        },
    }
})


export const { loginError, hideLoginError } = loginSlice.actions
export default loginSlice.reducer
