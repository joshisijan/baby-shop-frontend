import { StarIcon as StarFull } from '@heroicons/react/solid'
import { StarIcon as StarHalf } from '@heroicons/react/outline'

const starValue = {
    full: <StarFull className="w-6 h-6" />,
    empty: <StarHalf className="w-5 h-5" />
}

const StarGenerator = ({value}) => {
    // contains value for star eg. [full,full,half,empty,empty] for 2.5
    let stars = [];
    for(let i = 0; i < 5; i++) {
        if(value > 0) {
            stars.push(starValue.full);
            value -= 1;
        } else {
            stars.push(starValue.empty);
        }
    }

    return (
        <div className="flex items-center">
            {
                stars.map((element, index) => {
                    return (
                    <div key={index}>
                        {element}
                    </div>
                    )
                })
            }
        </div>
    )
}

export default StarGenerator
