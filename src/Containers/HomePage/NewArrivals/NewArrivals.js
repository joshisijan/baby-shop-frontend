import React, { useEffect } from 'react'
import NormalLink from '../../../Components/NormalLink/NormalLink'

import { ChevronDoubleRightIcon } from '@heroicons/react/outline'
import NewArrivalsError from './NewArrivalsError/NewArrivalsError'
import NewArrivalsList from './NewArrivalsList/NewArrivalsList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLatestProduct } from '../../../features/latestProduct/latestProductAction'

const NewArrivals = () => {
    const dispatch = useDispatch();
    const latestProductState = useSelector(state => state.latestProduct);    
    useEffect(() => {
        dispatch(fetchLatestProduct());
    }, [dispatch]);
    return (
        <div className="p-6 grid justify-items-center">
            <div className="max-w-6xl w-full">
                <div className="flex justify-between">
                    <h1 className="text-xl font-bold">
                        New Arrivals
                    </h1>
                    <NormalLink>View All <ChevronDoubleRightIcon className="w-5 h-5" /></NormalLink>
                </div>
                {
                    latestProductState.isLoading ? 
                    <div className="text-center">
                        Loading...
                    </div> :
                    latestProductState.error ? 
                    <NewArrivalsError /> :
                    latestProductState.data.results.length === 0 ?
                    <div className="text-center">
                        No latest product found.
                    </div> :
                    <NewArrivalsList productList={latestProductState.data.results} />
                }                
            </div>
        </div>
    )
}

export default NewArrivals
