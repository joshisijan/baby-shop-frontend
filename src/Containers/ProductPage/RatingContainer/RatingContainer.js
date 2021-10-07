import NormalLink from '../../../Components/NormalLink/NormalLink'
import StarGenerator from '../../../Components/StarGenerator/StarGenerator'

const RatingContainer = (props) => {
    return (
        <div className={`flex gap-2 flex-wrap justify-between ${props.className}`}>
            <div className="flex items-center text-secondary-dark-extra">
                <StarGenerator value={2.5} />
                <span className="ml-2 font-bold text-gray-800">3.5/5</span>
            </div>
            <NormalLink className="font-medium px-0">412 Reviews</NormalLink>
        </div>
    )
}

export default RatingContainer
