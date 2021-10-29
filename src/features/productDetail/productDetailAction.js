import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { productDetailUrl } from "../../constants/apiUrl";


export const fetchProductDetail = createAsyncThunk(
    'productDetail/fetchProductDetail', 
    async (productId, thunkApi) => {
        try {
            const response = await axios.get(`${productDetailUrl}${productId}/`);
            return response.data;
        } catch(e) {
            return thunkApi.rejectWithValue('An error occurred. Try again later.')
        }
    }
);