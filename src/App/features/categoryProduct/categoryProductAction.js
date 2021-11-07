import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { categoryProductUrl } from "../../constants/apiUrl";


export const fetchCategoryProduct = createAsyncThunk(
    'categoryProduct/fetchCategoryProduct', 
    async (id, thunkApi) => {
        try {
            const response = await axios.get(categoryProductUrl + id + '/products');
            if(response.status === 204) {
                return {
                    next: null,
                    results: []
                }
            }
            return response.data;
        } catch(e) {
            return thunkApi.rejectWithValue('An error occurred. Try again later.')
        }
    }
);


export const fetchNextCategorProduct = createAsyncThunk(
    'categoryProduct/fetchNextCategoryProduct', 
    async (data, thunkApi) => {
        try {
            const response = await axios.get(data);
            return response.data;
        } catch(e) {
            return thunkApi.rejectWithValue('An error occurred. Try again later.')
        }
    }
);


