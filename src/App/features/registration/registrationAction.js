import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import toast from "react-hot-toast";
import { registrationUrl } from '../../constants/apiUrl'
import { addUserDetail } from "../userDetail/userDetailSlice";

export const registration = createAsyncThunk(
    'register/register',
    async ({formData, history}, thunkApi) => {
        try {
            let response = await axios.post(
                registrationUrl,
                formData
            );
            if(response.status === 201) {
                toast.success('Successfully created account and logged in');
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
