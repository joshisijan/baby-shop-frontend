import { CheckCircleIcon } from '@heroicons/react/outline'

const NoLoginOrder = () => {
    return (
        <div className="border-t py-10 px-4 text-center text-gray-700 flex gap-4 flex-col justify-center items-center">
            <CheckCircleIcon className="w-14 h-14" />
            <h1 className="text-xl font-medium">You must login to view your orders.</h1>
        </div>
    )
}

export default NoLoginOrder
