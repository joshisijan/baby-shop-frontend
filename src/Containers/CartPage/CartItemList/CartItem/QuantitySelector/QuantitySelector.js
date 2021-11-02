import {
    PlusIcon,
    MinusSmIcon,
    ArrowRightIcon,
    XIcon,
} from '@heroicons/react/solid'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import DarkTextButton from '../../../../../Components/Button/DarkTextButton'
import FadeTransition from '../../../../../Components/Transition/FadeTransition'
import { hideDialog, showDialog } from '../../../../../features/alertDialog/alertDialogSlice'
import { updateCartItem } from '../../../../../features/cart/cartAction'
import currencyFormatter from '../../../../../services/currencyFormatter'

const QuantitySelector = ({ id, name, quantity = 1, price, discount, availableQuantity }) => {
    const dispatch = useDispatch()
    const [cartQuantity, setCartQuantity] = useState(quantity)

    const increase = () => {
        if (cartQuantity < availableQuantity) {
            setCartQuantity(cartQuantity + 1);
        }
    }

    const decrease = () => {
        if (cartQuantity > 1) {
            if (cartQuantity > availableQuantity) {
                setCartQuantity(availableQuantity);
                toast.error(`You can only have maximum of ${availableQuantity} items.`)
            } else {
                setCartQuantity(cartQuantity - 1);
            }
        }
    }

    const handleUpdate = () => {
        dispatch(showDialog({
            header: 'Update cart item',
            description: `Update product ${name}'s quantiy from ${quantity} to ${cartQuantity}?`,
            onYes: () => {
                dispatch(hideDialog())
                dispatch(updateCartItem({ id, quantity: cartQuantity }));
            }
        }));
    }

    const handleReset = () => {
        setCartQuantity(quantity);
    }

    const totalPrice = quantity * (price - price * discount / 100);
    const updatedPrice = cartQuantity * (price - price * discount / 100);

    return (
        <div>
            <div className="flex">
                <DarkTextButton
                    disabled={cartQuantity >= availableQuantity}
                    className={cartQuantity >= availableQuantity ? 'cursor-not-allowed' : ''}
                    onClick={increase}
                >
                    <PlusIcon className="w-3.5 h-3.5" />
                </DarkTextButton>
                <div className="py-1 px-4 text-sm bg-secondary-varient bg-opacity-20 flex items-center font-medium">
                    {cartQuantity}
                </div>
                <DarkTextButton
                    disabled={cartQuantity <= 1}
                    className={cartQuantity <= 1 ? 'cursor-not-allowed' : ''}
                    onClick={decrease}
                >
                    <MinusSmIcon className="w-3.5 h-3.5" />
                </DarkTextButton>
                <FadeTransition show={quantity !== cartQuantity}>
                    <div className="flex">
                        <DarkTextButton onClick={handleUpdate} className="ml-2 text-sm">
                            Update
                        </DarkTextButton>
                        <DarkTextButton onClick={handleReset} className="ml-2 text-sm">
                            <XIcon className="w-5 h-5" />
                        </DarkTextButton>
                    </div>
                </FadeTransition>
            </div>
            <div className="py-2 text-xs sm:text-sm font-medium">
                <span className="flex gap-2 items-center flex-wrap">
                    <span>Total price:</span>
                    <span className={`${quantity !== cartQuantity ? 'line-through' : ''}`}>{currencyFormatter(totalPrice)}</span>
                    {
                        quantity !== cartQuantity ?
                            <ArrowRightIcon className="w-3.5 h-3.5" />
                            : null
                    }
                    {
                        quantity !== cartQuantity ?
                            <span className="text-red-600">{currencyFormatter(updatedPrice)}</span>
                            : null
                    }
                </span>
            </div>
        </div>
    )
}

export default QuantitySelector
