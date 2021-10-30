import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import toast from "react-hot-toast";
import { addressListUrl, createAddressUrl } from '../../constants/apiUrl'
import { handleRefreshToken } from "../../services/refreshToken";

export const fetchUserAddress = createAsyncThunk(
    'userAddress/fetchUserAddress',
    async (_, thunkApi) => {
        // get userDetail state
        const {userDetail} = thunkApi.getState();
        // get  accessToken stored in storage
        const { accessToken } = userDetail;
        const { refreshToken } = userDetail;
        try {
            let response = await axios.get(
                addressListUrl,
                {
                  headers: {
                    'Authorization': `Bearer ${accessToken}`,
                 } 
                }
            );
            return response.data;
        } catch (e) {
            if (!e.response) {
                toast.error('Network error');
            } else {
                if (e.response.status === 401) {
                    return handleRefreshToken(refreshToken, thunkApi.dispatch, fetchUserAddress);                    
                } else {
                    toast.error('An error occurred');
                }
            }
        }
    }
)


export const addUserAddress = createAsyncThunk(
    'userAddress/addUserAddress',
    async (formData, thunkApi) => {
        // get userDetail state
        const {userDetail} = thunkApi.getState();
        // get  accessToken stored in storage
        const { accessToken } = userDetail;
        const { refreshToken } = userDetail;
        try {
            let response = await axios.post(
                createAddressUrl,
                formData,
                {
                  headers: {
                    'Authorization': `Bearer ${accessToken}`,
                 } 
                }
            );
            toast.success('Successfully added the address in your shipping information.');
            return response.data;
        } catch (e) {
            if (!e.response) {
                toast.error('Network error');
            } else {
                if (e.response.status === 401) {
                    return handleRefreshToken(refreshToken, thunkApi.dispatch, addUserAddress);                    
                } else {
                    console.log(e.response);
                    toast.error('An error occurred while adding the address in your shipping information.');
                }
            }
        }
    }
)