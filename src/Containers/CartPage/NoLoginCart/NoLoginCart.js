import { ShoppingCartIcon } from '@heroicons/react/outline'

const NoLoginCart = () => {
    return (
        <div className="border-t py-10 px-4 text-center text-gray-700 flex gap-4 flex-col justify-center items-center">
            <ShoppingCartIcon className="w-14 h-14" />
            <h1 className="text-xl font-medium">You must login to view your cart.</h1>
        </div>
    )
}

export default NoLoginCart
