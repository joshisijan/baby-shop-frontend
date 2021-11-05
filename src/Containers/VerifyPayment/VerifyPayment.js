import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory, useParams } from 'react-router'
import LoadingOverlay from '../../Components/LoadingOverlay/LoadingOverlay'
import { verifyPayment } from '../../features/verifyPayment/verifyPaymentAction'

const VerifyPayment = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { id } = useParams()
    const verifyPaymentState = useSelector(state => state.verifyPayment)

    useEffect(() => {
        dispatch(verifyPayment(id))
    }, [dispatch, id, history])

    if (verifyPaymentState.isVerifying || verifyPaymentState.isPaid === null) {
        return (
            <div>
                <LoadingOverlay label="Verifying payment..." />
            </div>
        )
    } else {
        if(verifyPaymentState.error) {
            return <Redirect to="/cart/checkout" />
        }else if(verifyPaymentState.isPaid){
            return <Redirect to="/order" />
        }else{
            return <Redirect to="/cart/checkout" />
        }
    }


}

export default VerifyPayment
