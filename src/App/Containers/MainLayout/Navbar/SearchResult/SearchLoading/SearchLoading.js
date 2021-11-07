import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const SearchLoading = () => {
    return (
        <div className="py-10 px-4 flex justify-center items-center">
            <div className="flex gap-4 items-center">
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
                <div>
                    Loading search result...
                </div>
            </div>
        </div>
    )
}

export default SearchLoading
