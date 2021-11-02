import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
import { checkoutAddressUpdateUrl, checkoutUrl } from "../../constants/apiUrl";
import {handleRefreshToken} from '../../services/refreshToken'

export const checkout = createAsyncThunk(
    'checkout/checkout',
    async (_, thunkApi) => {
        // get userDetail state
        const {userDetail} = thunkApi.getState();
        // get  accessToken stored in storage
        const { accessToken } = userDetail;
        const { refreshToken } = userDetail;
        if(accessToken === null) return;
        try {
            let response = await axios.get(
                checkoutUrl,
                {
                  headers: {
                    'Authorization': `Bearer ${accessToken}`,
                 } 
                }
            );
            return response.data;
        } catch (e) {
            if (e.response) {
                if (e.response.status === 401) {
                    return handleRefreshToken(refreshToken, thunkApi.dispatch, checkout);                    
                }
            }
            return thunkApi.rejectWithValue('error');
        }
    }
);

export const checkoutAddressPatch = createAsyncThunk(
    'checkout/checkoutAddressPatch',
    async (data, thunkApi) => {
        // get userDetail state
        const {userDetail} = thunkApi.getState();
        // get  accessToken stored in storage
        const { accessToken } = userDetail;
        const { refreshToken } = userDetail;
        if(accessToken === null) return;
        try {
            let response = await axios.patch(
                checkoutAddressUpdateUrl + data.orderId + '/',
                data.formData,
                {
                  headers: {
                    'Authorization': `Bearer ${accessToken}`,
                 } 
                }
            );
            return response.data;
        } catch (e) {
            if (e.response) {
                if (e.response.status === 401) {
                    return handleRefreshToken(refreshToken, thunkApi.dispatch, checkout);                    
                }
            }
            toast.error('An error occurred updating address in your shipping information.');
            return thunkApi.rejectWithValue('error');
        }
    }
);