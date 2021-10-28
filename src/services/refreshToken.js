import axios from 'axios';
import toast from 'react-hot-toast';
import { tokenRefreshUrl } from '../constants/apiUrl';
import { removeUserDetail, updateAccessToken } from '../features/userDetail/userDetailSlice';

export const handleRefreshToken = async (token, dispatch, action) => {
    // here action is previous action
    // dispatch is from thunk api
    // token is refresh token
    try {
        let response = await axios.post(
            tokenRefreshUrl,
            {
                refresh: token,
            }
        );
        if (response.status === 200) {
            // update access token
            dispatch(updateAccessToken(response.data.access));
            // dispatch previous action
            dispatch(action);
        }
    } catch (e) {
        dispatch(removeUserDetail());
        toast.error('Session expired. Login again.');
    }
}