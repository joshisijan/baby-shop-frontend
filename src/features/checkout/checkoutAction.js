import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
import { checkoutAddressUpdateUrl, checkoutUrl, createAddressUrl } from "../../constants/apiUrl";
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
            toast.success('Successfully changed address.')
            return response.data;
        } catch (e) {
            if (e.response) {
                if (e.response.status === 401) {
                    return handleRefreshToken(refreshToken, thunkApi.dispatch, checkout);                    
                }
            }
            toast.error('An error occurred updating address.');
            return thunkApi.rejectWithValue('error');
        }
    }
);


export const checkoutAddShippingAddress = createAsyncThunk(
    'userAddress/addUserAddress',
    async (data, thunkApi) => {
        // get userDetail state
        const {userDetail} = thunkApi.getState();
        // get  accessToken stored in storage
        const { accessToken } = userDetail;
        const { refreshToken } = userDetail;
        try {
            let response = await axios.post(
                createAddressUrl,
                data.formData,
                {
                  headers: {
                    'Authorization': `Bearer ${accessToken}`,
                 } 
                }
            );
            thunkApi.dispatch(checkoutAddressPatch({
                orderId: data.orderId,
                formData: {
                    shipping_address: response.data.id,
                    billing_address: data.billingId,
                }
            }))
            return response.data;
        } catch (e) {
            if (!e.response) {
                toast.error('Network error');
            } else {
                if (e.response.status === 401) {
                    return handleRefreshToken(refreshToken, thunkApi.dispatch, checkoutAddShippingAddress(data));                    
                } else {
                    toast.error('An error occurred while adding address.');
                }
            }
        }
    }
)

export const checkoutAddBillingAddress = createAsyncThunk(
    'userAddress/addUserAddress',
    async (data, thunkApi) => {
        // get userDetail state
        const {userDetail} = thunkApi.getState();
        // get  accessToken stored in storage
        const { accessToken } = userDetail;
        const { refreshToken } = userDetail;
        try {
            let response = await axios.post(
                createAddressUrl,
                data.formData,
                {
                  headers: {
                    'Authorization': `Bearer ${accessToken}`,
                 } 
                }
            );
            thunkApi.dispatch(checkoutAddressPatch({
                orderId: data.orderId,
                formData: {
                    billing_address: response.data.id,
                    shipping_address: data.shippingId,
                }
            }))
            return response.data;
        } catch (e) {
            if (!e.response) {
                toast.error('Network error');
            } else {
                if (e.response.status === 401) {
                    return handleRefreshToken(refreshToken, thunkApi.dispatch, checkoutAddShippingAddress(data));                    
                } else {
                    toast.error('An error occurred while adding address.');
                }
            }
        }
    }
)