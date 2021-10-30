import React, { useEffect } from 'react'
import NewArrivalsError from './NewArrivalsError/NewArrivalsError'
import NewArrivalsList from './NewArrivalsList/NewArrivalsList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLatestProduct } from '../../../features/latestProduct/latestProductAction'

const NewArrivals = ({className}) => {
    const dispatch = useDispatch();
    const latestProductState = useSelector(state => state.latestProduct);    
    useEffect(() => {
        dispatch(fetchLatestProduct());
    }, [dispatch]);
    return (
        <div className="-mt-10 p-6 grid justify-items-center">
            <div className="max-w-6xl w-full">
                <div className="flex justify-between">
                    <h1 className="text-xl font-bold">
                        New Arrivals
                    </h1>                    
                </div>
                {
                    latestProductState.isLoading ? 
                    <div className="text-center">
                        Loading...
                    </div> :
                    latestProductState.error ? 
                    <NewArrivalsError /> :
                    latestProductState.data.length === 0 ?
                    <div className="text-center">
                        No latest product found.
                    </div> :
                    <NewArrivalsList productList={latestProductState.data} />
                }                
            </div>
        </div>
    )
}

export default NewArrivals
