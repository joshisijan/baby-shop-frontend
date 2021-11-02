import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import toast from "react-hot-toast";
import { loginUrl, } from '../../constants/apiUrl'
import { addUserDetail } from "../userDetail/userDetailSlice";

export const login = createAsyncThunk(
    'login/login',
    async ({formData, history}, thunkApi) => {
        try {
            let response = await axios.post(
                loginUrl,
                formData
            );
            if(response.status === 200) {
                toast.success('Successfully logged in');
                thunkApi.dispatch(addUserDetail(response.data));
                history.push('/');
            }
        } catch (e) {
            if (!e.response) {
                return thunkApi.rejectWithValue({ general: ['Network error'] });
            } else {
                if (e.response.status === 400) {
                    const errors = e.response.data;
                    return thunkApi.rejectWithValue(errors);
                } else {
                    return thunkApi.rejectWithValue({ general: ['An error occurred'] });
                }
            }
        }
    }
)
