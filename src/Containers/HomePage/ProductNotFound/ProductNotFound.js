import { EmojiSadIcon } from '@heroicons/react/outline'
import DarkOutlineTextButton from '../../../Components/Button/DarkOutlineTextButton'

const ProductNotFound = () => {
    return (
        <div className="bg-secondary-varient grid justify-items-center">
            <div className="px-4 md:px-6 py-10 w-full max-w-6xl bg-secondary-varient flex flex-col items-center">
                <EmojiSadIcon className="w-8 h-8" />
                <h1 className="text-2xl font-bold text-center">
                    Couldn't find what you are looing for?
                </h1>
                <DarkOutlineTextButton className="mt-4">Contact us</DarkOutlineTextButton>
            </div>
        </div>
    )
}

export default ProductNotFound
