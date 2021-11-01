import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
import { checkoutVerifyUrl } from "../../constants/apiUrl";
import {handleRefreshToken} from '../../services/refreshToken'

export const verifyCheckout = createAsyncThunk(
    'checkout/verifyCheckout',
    async (_, thunkApi) => {
        // get userDetail state
        const {userDetail} = thunkApi.getState();
        // get  accessToken stored in storage
        const { accessToken } = userDetail;
        const { refreshToken } = userDetail;
        if(accessToken === null) return;
        try {
            let response = await axios.get(
                checkoutVerifyUrl,
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
                console.log(e.response)
                if (e.response.status === 401) {
                    return handleRefreshToken(refreshToken, thunkApi.dispatch, verifyCheckout);                    
                } else {
                    toast.error('An error occurred while verifying checkout.');
                }
            }
        }
    }
);