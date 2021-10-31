import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { cartListUrl } from "../../constants/apiUrl";
import toast from "react-hot-toast";
import {handleRefreshToken} from '../../services/refreshToken'

export const fetchCartList = createAsyncThunk(
    'cart/fetchCartList',
    async (_, thunkApi) => {
        // get userDetail state
        const {userDetail} = thunkApi.getState();
        // get  accessToken stored in storage
        const { accessToken } = userDetail;
        const { refreshToken } = userDetail;
        if(accessToken === null) return;
        try {
            let response = await axios.get(
                cartListUrl,
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
                    return handleRefreshToken(refreshToken, thunkApi.dispatch, fetchCartList);                    
                } else {
                    toast.error('An error occurred while adding the address in your shipping information.');
                }
            }
        }
    }
);
