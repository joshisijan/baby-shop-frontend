import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import { verifyPayment } from '../../features/verifyPayment/verifyPaymentAction'

const VerifyPayment = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { id } = useParams()

    useEffect(() => {
        dispatch(verifyPayment(id))
        history.replace('/order')
    }, [dispatch, id, history])

    return (
        <div></div>
    )
}

export default VerifyPayment
