import PrimaryTextButton from '../../../../Components/Button/PrimaryTextButton'
import { useDispatch } from 'react-redux'
import { fetchLatestProduct } from '../../../../features/latestProduct/latestProductAction'


const NewArrivalsError = () => {
    const dispatch = useDispatch()
    const refresh = () => {
        dispatch(fetchLatestProduct());
    }

    return (
        <div className="py-6 space-y-2 flex flex-col items-center">
            <div className="text-red-600">
                Error fetching new arrivals.
            </div>
            <PrimaryTextButton onClick={refresh}>
                Try again
            </PrimaryTextButton>
        </div>
    )
}

export default NewArrivalsError
