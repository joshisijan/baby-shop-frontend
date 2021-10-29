import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { categoryListUrl } from "../../constants/apiUrl";


export const fetchCategoryList = createAsyncThunk(
    'categoryList/fetchCategoryList', 
    async (_, thunkApi) => {
        try {
            const response = await axios.get(categoryListUrl);
            return response.data;
        } catch(e) {
            return thunkApi.rejectWithValue('An error occurred. Try again later.')
        }
    }
);