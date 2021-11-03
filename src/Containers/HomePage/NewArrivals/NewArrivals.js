import React, { useEffect } from 'react'
import NewArrivalsError from './NewArrivalsError/NewArrivalsError'
import NewArrivalsList from './NewArrivalsList/NewArrivalsList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLatestProduct, fetchNextLatestProduct } from '../../../features/latestProduct/latestProductAction'
import PrimaryTextButton from '../../../Components/Button/PrimaryTextButton'

const NewArrivals = ({ className }) => {
    const dispatch = useDispatch();
    const latestProductState = useSelector(state => state.latestProduct);

    useEffect(() => {
        dispatch(fetchLatestProduct());
    }, [dispatch]);

    const handleNext = () => {
        dispatch(fetchNextLatestProduct(latestProductState.data.next));
    }

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
                                <div>
                                    <NewArrivalsList productList={latestProductState.data.results} />
                                    {
                                        latestProductState.data.next !== null ?
                                            <div className="flex justify-center">
                                                <PrimaryTextButton
                                                    isLoading={latestProductState.isLoadingNext}
                                                    onClick={handleNext}
                                                >
                                                    Load more
                                                </PrimaryTextButton>
                                            </div>
                                            :
                                            <div className="py-4 flex gap-4 items-center">
                                                <div className="flex-1 h-0.5 bg-gray-700">

                                                </div>
                                                <div className="font-medium">
                                                    End of new arrivals
                                                </div>
                                                <div className="flex-1 h-0.5 bg-gray-700">
                                                </div>
                                            </div>
                                    }
                                </div>
                }
            </div>
        </div>
    )
}

export default NewArrivals
