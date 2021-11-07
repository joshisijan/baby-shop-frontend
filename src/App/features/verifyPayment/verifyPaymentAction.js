import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { orderDetailUrl } from "../../constants/apiUrl";
import {handleRefreshToken} from '../../services/refreshToken'

export const verifyPayment = createAsyncThunk(
    'verifyPayment/verifyPayment',
    async (orderId, thunkApi) => {
        // get userDetail state
        const {userDetail} = thunkApi.getState();
        // get  accessToken stored in storage
        const { accessToken } = userDetail;
        const { refreshToken } = userDetail;
        if(accessToken === null) return;
        try {
            let response = await axios.get(
                orderDetailUrl + orderId + '/',
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
                    return handleRefreshToken(refreshToken, thunkApi.dispatch, verifyPayment(orderId));                    
                }
            }
            return thunkApi.rejectWithValue('error');
        }
    }
);