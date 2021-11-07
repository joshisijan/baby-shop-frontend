import toast from 'react-hot-toast';
import { resetCartState } from '../cart/cartSlice';
import { removeUserDetail } from '../userDetail/userDetailSlice';

export const handleLogout = (dispatch) => {
    dispatch(removeUserDetail());
    dispatch(resetCartState())
    toast.success('Successfully logged out.');
}