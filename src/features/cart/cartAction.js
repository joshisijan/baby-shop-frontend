import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { addToCarttUrl, baseUrl, cartListUrl } from "../../constants/apiUrl";
import toast from "react-hot-toast";
import {handleRefreshToken} from '../../services/refreshToken'
import { fetchProductDetail } from "../productDetail/productDetailAction";

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
                    toast.error('An error occurred while fetching cart item.');
                }
            }
        }
    }
);

export const removeCartitem = createAsyncThunk(
    'cart/removeCartItem',
    async (id, thunkApi) => {
        // get userDetail state
        const {userDetail} = thunkApi.getState();
        // get  accessToken stored in storage
        const { accessToken } = userDetail;
        const { refreshToken } = userDetail;
        if(accessToken === null) return;
        try {
            let response = await axios.delete(
                baseUrl + '/api/shop/cart/item/' + id +'/update/',
                {
                  headers: {
                    'Authorization': `Bearer ${accessToken}`,
                 } 
                }
            );
            thunkApi.dispatch(fetchCartList());
            toast.success('Successfully removed item from cart.');
            return response.data;
        } catch (e) {
            thunkApi.dispatch(fetchCartList());
            if (!e.response) {
                toast.error('Network error');
            } else {
                if (e.response.status === 401) {
                    return handleRefreshToken(refreshToken, thunkApi.dispatch, removeCartitem);                    
                } else {
                    toast.error('An error occurred while removing item from cart.');
                }
            }
        }
    }
);

export const updateCartItem = createAsyncThunk(
    'cart/updateCartItem',
    async ({id, quantity}, thunkApi) => {
        const {userDetail} = thunkApi.getState();
        // get  accessToken stored in storage
        const { accessToken } = userDetail;
        const { refreshToken } = userDetail;
        if(accessToken === null) return;
        try {
            let response = await axios.patch(
                baseUrl + '/api/shop/cart/item/' + id +'/update/',
                {
                    quantity,
                },
                {
                  headers: {
                    'Authorization': `Bearer ${accessToken}`,
                 },
                }
            );
            thunkApi.dispatch(fetchCartList());
            toast.success('Successfully updated item from cart.');
            return response.data;
        } catch (e) {
            if (!e.response) {
                toast.error('Network error');
            } else {
                if (e.response.status === 401) {
                    return handleRefreshToken(refreshToken, thunkApi.dispatch, removeCartitem);                    
                } else {
                    toast.error('An error occurred while updating item from cart.');
                }
            }
        }
    }
);

export const addCartItem = createAsyncThunk(
    'cart/addCartItem',
    async (data, thunkApi) => {
        const {userDetail} = thunkApi.getState();
        // get  accessToken stored in storage
        const { accessToken } = userDetail;
        const { refreshToken } = userDetail;
        if(accessToken === null) return;
        try {
            let response = await axios.post(
                addToCarttUrl,
                data.data,
                {
                  headers: {
                    'Authorization': `Bearer ${accessToken}`,
                 },
                }
            );
            thunkApi.dispatch(fetchCartList()); // update cart in add to cart
            thunkApi.dispatch(fetchProductDetail(data.productId)) //update product detail in add to cart
            toast.success('Successfully added item to cart.');
            return response.data;
        } catch (e) {            
            if (!e.response) {
                toast.error('Network error');
            } else {                
                if (e.response.status === 401) {
                    return handleRefreshToken(refreshToken, thunkApi.dispatch, removeCartitem);                    
                } else {
                    toast.error('An error occurred while adding item to cart.');
                }
            }
        }
    }
);
