import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import toast from "react-hot-toast";
import { userUrl } from '../../constants/apiUrl'
import { handleRefreshToken } from "../../services/refreshToken";

export const fetchtUserDetail = createAsyncThunk(
    'userDetail/fetchtUserDetail',
    async (_, thunkApi) => {
        // get userDetail state
        const {userDetail} = thunkApi.getState();
        // get  accessToken stored in storage
        const { accessToken } = userDetail;
        const { refreshToken } = userDetail;
        try {
            let response = await axios.get(
                userUrl,
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
                    return handleRefreshToken(refreshToken, thunkApi.dispatch, fetchtUserDetail);                    
                } else {
                    toast.error('An error occurred');
                }
            }
        }
    }
)
