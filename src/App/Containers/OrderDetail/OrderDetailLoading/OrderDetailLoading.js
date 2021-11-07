import CircularProgressIndicator from "../../../Components/CircularProgressIndicator/CircularProgressIndicator"

const OrderDetailLoading = () => {
    return (
        <div className="p-6 flex gap-2 flex-col items-center justify-center bg-white text-gray-700 rounded-xl">
            <div className="w-10 h-10">
                <CircularProgressIndicator />
            </div>
            <span className="font-bold">
                Loading order detail...
            </span>
        </div>
    )
}

export default OrderDetailLoading
