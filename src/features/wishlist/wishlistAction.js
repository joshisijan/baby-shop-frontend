import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
import { wishlistListUrl, wishlistRemoveUrl } from "../../constants/apiUrl";
import {handleRefreshToken} from '../../services/refreshToken'
import { fetchProductDetail } from "../productDetail/productDetailAction";

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
            if(response.status === 204) {
                return {
                    next: null,
                    results: [],
                }
            }
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
                data.formData,
                {
                  headers: {
                    'Authorization': `Bearer ${accessToken}`,
                 } 
                }
            );
            thunkApi.dispatch(fetchProductDetail(data.productId));
            toast.success('Successfully added product to wishlist');
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


export const removeFromWishlist = createAsyncThunk(
    'wishlist/removeFromWishlist',
    async (data, thunkApi) => {
        // get userDetail state
        const {userDetail} = thunkApi.getState();
        // get  accessToken stored in storage
        const { accessToken } = userDetail;
        const { refreshToken } = userDetail;
        if(accessToken === null) return;
        try {
            let response = await axios.delete(
                wishlistRemoveUrl + data.inventoryId + '/update/',
                {
                  headers: {
                    'Authorization': `Bearer ${accessToken}`,
                 } 
                }
            );
            thunkApi.dispatch(fetchProductDetail(data.productId));
            toast.success('Successfully removed product from wishlist');
            return response.data;
        } catch (e) {
            console.log(e.response)
            if (e.response)  {
                if (e.response.status === 401) {
                    return handleRefreshToken(refreshToken, thunkApi.dispatch, removeFromWishlist(data));                    
                }
            }
            toast.error('Error removing product to your wishlist')
            return thunkApi.rejectWithValue('error');
        }
    }
);


export const getNextData = createAsyncThunk(
    'wishlist/getNextData',
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

export const removeAllWishlist = createAsyncThunk(
    'wishlist/removeAllWishlist',
    async (_, thunkApi) => {
        // get userDetail state
        const {userDetail} = thunkApi.getState();
        // get  accessToken stored in storage
        const { accessToken } = userDetail;
        const { refreshToken } = userDetail;
        if(accessToken === null) return;
        try {
            let response = await axios.delete(
                wishlistListUrl,
                {
                  headers: {
                    'Authorization': `Bearer ${accessToken}`,
                 } 
                }
            );
            toast.success('Successfully removed all products from wishlist');
            thunkApi.dispatch(fetchWishlistList())
            return response.data;
        } catch (e) {
            console.log(e.response)
            if (e.response)  {
                if (e.response.status === 401) {
                    return handleRefreshToken(refreshToken, thunkApi.dispatch, removeAllWishlist());                    
                }
            }
            toast.error('Error removing product to your wishlist')
            return thunkApi.rejectWithValue('error');
        }
    }
);