import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { searchUrl } from "../../constants/apiUrl";

let cancelToken;

export const search = createAsyncThunk(
    'search/search',
    async (searchQuery, thunkApi) => {

        if (typeof cancelToken != typeof undefined) {
            cancelToken.cancel("cancelToken");
        }
        cancelToken = axios.CancelToken.source();
        try {
            const response = await axios.get(
                searchUrl,
                {
                    params: searchQuery,
                    cancelToken: cancelToken.token,
                },
            );
            return response.data;
        } catch (e) {
            if (e.message) {
                if (e.message === 'cancelToken') {
                    return thunkApi.rejectWithValue('');
                }
            }
            return thunkApi.rejectWithValue('An error occurred. Try again later.')
        }
    }
);

export const getNextData = createAsyncThunk(
    'search/getNextData',
    async (nextLink, thunkApi) => {
        try {
            const response = await axios.get(
                nextLink,
            );
            return response.data;
        } catch (e) {
            return thunkApi.rejectWithValue('An error occurred. Try again later.')
        }
    }
);