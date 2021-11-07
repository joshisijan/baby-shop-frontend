import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const SecondaryTextButton = ({ isLoading = false, disabled = false, loadingText = 'Loading...', children, className, ...rest }) => {
    return (
        <button
            {...rest}
            disabled={isLoading || disabled}
            className={`rounded-lg relative transition bg-secondary-dark text-gray-800 hover:bg-secondary focus:outline-none focus:ring focus:ring-secondary-varient px-4 py-2 ${className}`}
        >
            {
                isLoading ?
                    <div className="space-x-2 bg-secondary-dark flex justify-center items-center">
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

export default SecondaryTextButton
