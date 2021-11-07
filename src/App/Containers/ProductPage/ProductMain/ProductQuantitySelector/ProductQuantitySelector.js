import {
    PlusIcon,
    MinusSmIcon,
} from '@heroicons/react/solid'
import DarkTextButton from '../../../../Components/Button/DarkTextButton'


const ProductQuantitySelector = ({ quantity = 1, setQuantity, availableQuantity }) => {

    const increase = () => {
        if (quantity < availableQuantity) {
            setQuantity(quantity + 1);
        }
    }

    const decrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <div className="flex">
            <DarkTextButton
                disabled={quantity >= availableQuantity}
                className={quantity >= availableQuantity ? 'cursor-not-allowed' : ''}
                onClick={increase}
            >
                <PlusIcon className="w-3.5 h-3.5" />
            </DarkTextButton>
            <div className="py-1 px-4 text-sm bg-secondary-varient bg-opacity-20 flex items-center font-medium">
                {quantity}
            </div>
            <DarkTextButton
                disabled={quantity <= 1}
                className={quantity <= 1 ? 'cursor-not-allowed' : ''}
                onClick={decrease}
            >
                <MinusSmIcon className="w-3.5 h-3.5" />
            </DarkTextButton>
        </div>
    )
}

export default ProductQuantitySelector
