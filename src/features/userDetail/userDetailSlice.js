import { createSlice } from "@reduxjs/toolkit";
import { fetchtUserDetail } from "./userDetailAction";

const initialState = {
    accessToken: null,
    refreshToken: null,
    user: {
        username: null,
        email: null,
        firstName: null,
        lastName: null,
        phoneNumber: null,
    }
}

const userDetailSlice = createSlice({  
    name: 'userDetail',
    initialState,
    reducers: {
        addUserDetail: (state, {payload}) => {
            state.accessToken = payload.access_token
            state.refreshToken = payload.refresh_token
            state.user.username = payload.user.username
            state.user.email = payload.user.email 
            state.user.firstName = payload.user.first_name
            state.user.lastName = payload.user.last_name
            state.user.phoneNumber = payload.user.phone_number
        },
        removeUserDetail: (state) => {
            state.accessToken = null
            state.refreshToken = null
            state.user.username = null 
            state.user.email = null 
            state.user.firstName = null 
            state.user.lastName = null 
            state.user.phoneNumber = null
        },
        updateAccessToken: (state, {payload}) => {
            state.accessToken = payload
        }
    },
    extraReducers: {
        [fetchtUserDetail.fulfilled]: (state, {payload}) => {
            if(payload != null) {
                state.user.username = payload.username
            state.user.email = payload.email 
            state.user.firstName = payload.first_name
            state.user.lastName = payload.last_name
            state.user.phoneNumber = payload.phone_number
            }
        },
    }
});

export const { addUserDetail, removeUserDetail, updateAccessToken } = userDetailSlice.actions

export default userDetailSlice.reducer