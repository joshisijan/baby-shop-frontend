import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { productDetailUrl } from "../../constants/apiUrl";
import { handleRefreshTokenNoError } from "../../services/refreshToken";


export const fetchProductDetail = createAsyncThunk(
    'productDetail/fetchProductDetail',
    async (productId, thunkApi) => {
        // get userDetail state
        const { userDetail } = thunkApi.getState();
        // get  accessToken / refreshToken stored in storage
        const { accessToken } = userDetail;
        const { refreshToken } = userDetail;
        try {
            // different request if auth and no auth
            if (accessToken === null) {
                const response = await axios.get(`${productDetailUrl}${productId}/`);
                return {
                    auth: false,
                    responseData: response.data,
                };
            } else {
                const response = await axios.get(
                    `${productDetailUrl}${productId}/`,
                    {
                        headers: {
                            'Authorization': `Bearer ${accessToken}`,
                        }
                    }
                );
                return {
                    auth: true, 
                    responseData: response.data,
                };
            }            
        } catch (e) {
            if(e.response) {
                if (e.response.status === 401) {
                    return handleRefreshTokenNoError(refreshToken, thunkApi.dispatch, fetchProductDetail(productId));
                } 
                return thunkApi.rejectWithValue('An error occurred. Try again later');
            }
        }
    }
);