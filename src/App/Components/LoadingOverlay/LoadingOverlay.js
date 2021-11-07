import CircularProgressIndicator from '../CircularProgressIndicator/CircularProgressIndicator';

const LoadingOverlay = ({ label = 'Loading...' }) => {
    return (
        <div className="fixed inset-x-0 top-0 h-screen bg-black bg-opacity-50 z-20 flex justify-center items-center">
            <div className="p-4 md:p-0 max-w-2xl h-full flex justify-center items-center">
                <div className="p-6 flex gap-2 flex-col items-center justify-center bg-white text-gray-700 rounded-xl">
                    <div className="w-10 h-10">
                        <CircularProgressIndicator />
                    </div>
                    <span className="font-bold">
                        {label}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default LoadingOverlay
