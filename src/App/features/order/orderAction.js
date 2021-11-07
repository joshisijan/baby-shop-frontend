import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { orderListUrl } from "../../constants/apiUrl";
import {handleRefreshToken} from '../../services/refreshToken'

export const fetchOrderList = createAsyncThunk(
    'order/fetchOrderList',
    async (status = '', thunkApi) => {
        // get userDetail state
        const {userDetail} = thunkApi.getState();
        // get  accessToken stored in storage
        const { accessToken } = userDetail;
        const { refreshToken } = userDetail;
        if(accessToken === null) return;
        try {
            let response = await axios.get(
                orderListUrl,
                {
                  headers: {
                    'Authorization': `Bearer ${accessToken}`,                
                 },
                 params: {
                    status: status,
                 }, 
                }
            );
            if(response.status === 204) {
                return {
                    next: null,
                    results: []
                }
            }
            return response.data;
        } catch (e) {
            if (e.response)  {
                if (e.response.status === 401) {
                    return handleRefreshToken(refreshToken, thunkApi.dispatch, fetchOrderList);                    
                }
            }
            return thunkApi.rejectWithValue('error');
        }
    }
);


export const getNextData = createAsyncThunk(
    'order/getNextData',
    async (nextLink, thunkApi) => {
        // get userDetail state
        const {userDetail} = thunkApi.getState();
        // get  accessToken stored in storage
        const { accessToken } = userDetail;
        const { refreshToken } = userDetail;
        if(accessToken === null) return;
        try {
            let response = await axios.get(
                nextLink,
                {
                  headers: {
                    'Authorization': `Bearer ${accessToken}`,
                 } 
                }
            );
            return response.data;
        } catch (e) {
            if (e.response)  {
                if (e.response.status === 401) {
                    return handleRefreshToken(refreshToken, thunkApi.dispatch, getNextData(nextLink));                    
                }
            }
            return thunkApi.rejectWithValue('error');
        }
    }
);