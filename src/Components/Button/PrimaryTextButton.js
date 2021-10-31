import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const PrimaryTextButton = ({ isLoading = false, loadingText = 'Loading...', children, className, ...rest }) => {
    return (
        <button
            {...rest}
            disabled={isLoading}
            className={`relative transition bg-primary-dark text-gray-800 hover:bg-primary focus:outline-none focus:ring focus:ring-primary-varient px-4 py-2 ${className}`}
        >
            {
                isLoading ?
                    <div className="space-x-2 bg-primary-dark flex justify-center items-center">
                        <div className="w-5 h-5">
                            <CircularProgressbar
                                className="animate-spin"
                                value={0.5}
                                maxValue={1}
                                minValue={0}
                                strokeWidth={12}
                                styles={buildStyles({
                                    pathColor: '#3f4e4f',
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

export default PrimaryTextButton
