import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { latestProductListUrl } from "../../constants/apiUrl";


export const fetchLatestProduct = createAsyncThunk(
    'latestProductList', 
    async (_, thunkApi) => {
        try {
            const response = await axios.get(latestProductListUrl);
            return response.data;
        } catch(e) {
            return thunkApi.rejectWithValue('An error occurred. Try again later.')
        }
    }
);

