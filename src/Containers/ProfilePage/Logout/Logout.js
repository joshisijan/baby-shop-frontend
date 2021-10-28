import React from 'react'
import { useDispatch } from 'react-redux'
import PrimaryTextButton from '../../../Components/Button/PrimaryTextButton'
import { handleLogout } from '../../../features/logout/logoutAction';

const Logout = () => {
    const dispatch = useDispatch();
    return (
        <div className="md:px-4 py-10 flex flex-col gap-4 items-center justify-center">
            <p className="font-bold">
                Do you really want to log out?
            </p>
            <PrimaryTextButton onClick={() => handleLogout(dispatch)}> 
                Log out
            </PrimaryTextButton>
        </div>
    )
}

export default Logout
