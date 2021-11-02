import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { checkoutUrl } from "../../constants/apiUrl";
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