import {
    PlusIcon,
    MinusSmIcon,
} from '@heroicons/react/solid'
import DarkTextButton from '../../../../../Components/Button/DarkTextButton'

const QuantitySelector = ({ quantity }) => {
    return (
        <div className="flex">
            <DarkTextButton>
                <PlusIcon className="w-4 h-4" />
            </DarkTextButton>
            <div className="py-1 px-4 bg-secondary-varient bg-opacity-20 flex items-center font-medium">
                {quantity}
            </div>
            <DarkTextButton>
                <MinusSmIcon className="w-4 h-4" />
            </DarkTextButton>
        </div>
    )
}

export default QuantitySelector
