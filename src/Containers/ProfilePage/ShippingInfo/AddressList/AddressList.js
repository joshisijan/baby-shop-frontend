import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserAddress } from '../../../../features/userAddress/userAddressAction';
import AddressListItem from './AdressListItem/AddressListItem';

const AddressList = () => {
    const dispatch = useDispatch();
    const userAddressState = useSelector(state => state.userAddress);
    useEffect(() => {
        dispatch(fetchUserAddress());
    }, [dispatch]);
    return (
        <div>
            {
                userAddressState.data.length === 0 ?
                    <div className="text-center font-bold py-10">No address found. Add a address to your shipping information.</div>
                    :
                    <div className="space-y-2 p-2">
                        {
                            userAddressState.data.map((address) => {
                                if (address.is_default_billing || address.is_default_shipping) {
                                    return (
                                        <AddressListItem key={address.id} address={address} />
                                    )
                                } else {
                                    return null
                                }
                            })
                        }
                        {
                            userAddressState.data.map((address) => {
                                if (!address.is_default_billing || !address.is_default_shipping) {
                                    return (
                                        <AddressListItem key={address.id} address={address} />
                                    )
                                } else {
                                    return null
                                }
                            })
                        }
                    </div>
            }
        </div>
    )
}

export default AddressList
