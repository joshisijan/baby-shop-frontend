import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const DarkTextButton = ({ isLoading = false, disabled = false, loadingText = 'Loading...', children, className, ...rest }) => {
    return (
        <button
            {...rest}
            disabled={isLoading || disabled}
            className={`px-3 py-1.5 rounded- rounded-lg transition text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring focus:ring-gray-600 ${className}`}
        >
            {
            isLoading ?
                <div className="space-x-2 flex justify-center items-center">
                    <div className="w-4 h-4">
                        <CircularProgressbar
                            className="animate-spin"
                            value={0.5}
                            maxValue={1}
                            minValue={0}
                            strokeWidth={12}
                            styles={buildStyles({
                                pathColor: '#ffffff',
                                trailColor: '#C1DDD8',
                            })}
                        />
                    </div>
                    <span>{loadingText}</span>
                </div>
                : children
            }
        </button>
    )
}

export default DarkTextButton
