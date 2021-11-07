import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
import { wishlistListUrl, wishlistRemoveUrl } from "../../constants/apiUrl";
import {handleRefreshToken} from '../../services/refreshToken'
import { localAddWatchlist as localAddWatchlistFromProduct, localRemoveWatchlist  as localRemoveWatchlistFromProduct} from "../productDetail/productDetailSlice";
import { localRemoveAllWishlist, localRemoveWishlist } from "./wishlistSlice";


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


export const addToWishlistFromProduct = createAsyncThunk(
    'wishlist/addToWishlistFromProduct',
    async (inventoryId, thunkApi) => {
        // get userDetail state
        const {userDetail} = thunkApi.getState();
        // get  accessToken stored in storage
        const { accessToken } = userDetail;
        const { refreshToken } = userDetail;
        if(accessToken === null) return;
        try {
            let response = await axios.post(
                wishlistListUrl,
                {
                    inventory: inventoryId,
                },
                {
                  headers: {
                    'Authorization': `Bearer ${accessToken}`,
                 } 
                }
            );
            toast.success('Successfully added product to wishlist');
            thunkApi.dispatch(localAddWatchlistFromProduct())
            return response.data;
        } catch (e) {
            if (e.response)  {
                if (e.response.status === 401) {
                    return handleRefreshToken(refreshToken, thunkApi.dispatch, addToWishlistFromProduct(inventoryId));                    
                }
            }
            toast.error('Error adding product to your wishlist')
            return thunkApi.rejectWithValue('error');
        }
    }
);


export const removeFromWishlist = createAsyncThunk(
    'wishlist/removeFromWishlist',
    async (inventoryId, thunkApi) => {
        // get userDetail state
        const {userDetail} = thunkApi.getState();
        // get  accessToken stored in storage
        const { accessToken } = userDetail;
        const { refreshToken } = userDetail;
        if(accessToken === null) return;
        try {
            let response = await axios.delete(
                wishlistRemoveUrl + inventoryId + '/update/',
                {
                  headers: {
                    'Authorization': `Bearer ${accessToken}`,
                 } 
                }
            );
            toast.success('Successfully removed product from wishlist');
            thunkApi.dispatch(localRemoveWishlist(inventoryId));
            return response.data;
        } catch (e) {
            if (e.response)  {
                if (e.response.status === 401) {
                    return handleRefreshToken(refreshToken, thunkApi.dispatch, removeFromWishlist(inventoryId));                    
                }
            }
            toast.error('Error removing product to your wishlist')
            return thunkApi.rejectWithValue('error');
        }
    }
);

export const removeFromWishlistFromProduct = createAsyncThunk(
    'wishlist/removeFromWishlistFromProduct',
    async (inventoryId, thunkApi) => {
        // get userDetail state
        const {userDetail} = thunkApi.getState();
        // get  accessToken stored in storage
        const { accessToken } = userDetail;
        const { refreshToken } = userDetail;
        if(accessToken === null) return;
        try {
            let response = await axios.delete(
                wishlistRemoveUrl + inventoryId + '/update/',
                {
                  headers: {
                    'Authorization': `Bearer ${accessToken}`,
                 } 
                }
            );
            toast.success('Successfully removed product from wishlist');
            thunkApi.dispatch(localRemoveWatchlistFromProduct());
            return response.data;
        } catch (e) {
            if (e.response)  {
                if (e.response.status === 401) {
                    return handleRefreshToken(refreshToken, thunkApi.dispatch, removeFromWishlistFromProduct(inventoryId));                    
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
            thunkApi.dispatch(localRemoveAllWishlist())
            return response.data;
        } catch (e) {
            if (e.response)  {
                if (e.response.status === 401) {
                    return handleRefreshToken(refreshToken, thunkApi.dispatch, removeAllWishlist());                    
                }
            }
            toast.error('Error removing all product to your wishlist')
            return thunkApi.rejectWithValue('error');
        }
    }
);