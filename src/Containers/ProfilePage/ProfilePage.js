import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { fetchtUserDetail } from '../../features/userDetail/userDetailAction';

const ProfilePage = () => {
    const dispatch = useDispatch()

    useEffect(() => {  
        dispatch(fetchtUserDetail());
    });
    
    return (
        <div>
            Profile page of user
        </div>
    )
}

export default ProfilePage
