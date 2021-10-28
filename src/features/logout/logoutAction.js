import toast from 'react-hot-toast';
import { removeUserDetail } from '../userDetail/userDetailSlice';

export const handleLogout = (dispatch) => {
    dispatch(removeUserDetail());
    toast.success('Successfully logged out.');
}