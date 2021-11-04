import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
import { wishlistListUrl } from "../../constants/apiUrl";
import {handleRefreshToken} from '../../services/refreshToken'

export const fetchWishlistList = createAsyncThunk(
    'wishlist/fetchWishlistList',
    async (_, thunkApi) => {
        // get userDetail state
        const {userDetail} = thunkApi.getState();
        // get  accessToken stored in storage
        const { accessToken } = userDetail;
        const { refreshToken } = userDetail;
        if(accessToken === null) return;
        try {
            let response = await axios.get(
                wishlistListUrl,
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
                    return handleRefreshToken(refreshToken, thunkApi.dispatch, fetchWishlistList);                    
                }
            }
            return thunkApi.rejectWithValue('error');
        }
    }
);


export const addToWishlist = createAsyncThunk(
    'wishlist/addToWishlist',
    async (data, thunkApi) => {
        // get userDetail state
        const {userDetail} = thunkApi.getState();
        // get  accessToken stored in storage
        const { accessToken } = userDetail;
        const { refreshToken } = userDetail;
        if(accessToken === null) return;
        try {
            let response = await axios.post(
                wishlistListUrl,
                data,
                {
                  headers: {
                    'Authorization': `Bearer ${accessToken}`,
                 } 
                }
            );
            toast.success('Successfully added product to cart');
            return response.data;
        } catch (e) {
            if (e.response)  {
                if (e.response.status === 401) {
                    return handleRefreshToken(refreshToken, thunkApi.dispatch, addToWishlist(data));                    
                }
            }
            toast.error('Error adding product to your wishlist')
            return thunkApi.rejectWithValue('error');
        }
    }
);