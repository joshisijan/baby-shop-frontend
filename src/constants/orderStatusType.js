const orderStatusType = {
    startedPreparing: {
        label: 'Started Preparing',
        description: 'Qui enim enim pariatur velit ea sit excepteur cillum proident officia deserunt nulla fugiat.',
        symbol: 'PP',
        color: 'bg-gray-400',
    },
    shippedToYourArea: {
        label: 'Shipped to your area',
        description: 'Qui enim enim pariatur velit ea sit excepteur cillum proident officia deserunt nulla fugiat.',
        symbol: 'SH',
        color: 'bg-yellow-400',
    },
    outForDelivery: {
        label: 'Out for delivery',
        description: 'Qui enim enim pariatur velit ea sit excepteur cillum proident officia deserunt nulla fugiat.',
        symbol: 'OD',
        color: 'bg-blue-500',
    },
    delivered: {
        label: 'Delivered',
        description: 'Qui enim enim pariatur velit ea sit excepteur cillum proident officia deserunt nulla fugiat.',
        symbol: 'DL',
        color: 'bg-green-500',
    },
    canceled: {
        label: 'Canceled',
        description: 'Qui enim enim pariatur velit ea sit excepteur cillum proident officia deserunt nulla fugiat.',
        symbol: 'CC',
        color: 'bg-black',
    },
    failed: {
        label: 'Failed',
        description: 'Qui enim enim pariatur velit ea sit excepteur cillum proident officia deserunt nulla fugiat.',
        symbol: 'FI',
        color: 'bg-red-500',
    },
    refunded: {
        label: 'Refunded',
        description: 'Qui enim enim pariatur velit ea sit excepteur cillum proident officia deserunt nulla fugiat.',
        symbol: 'RF',
        color: 'bg-black',
    },
}

export const onlySuccessOrderStatusType = [
    {
        label: 'Started Preparing',
        description: 'Qui enim enim pariatur velit ea sit excepteur cillum proident officia deserunt nulla fugiat.',
        symbol: 'PP',
        color: 'bg-gray-400',
    },
    {
        label: 'Shipped to your area',
        description: 'Qui enim enim pariatur velit ea sit excepteur cillum proident officia deserunt nulla fugiat.',
        symbol: 'SH',
        color: 'bg-yellow-400',
    },
    {
        label: 'Out for delivery',
        description: 'Qui enim enim pariatur velit ea sit excepteur cillum proident officia deserunt nulla fugiat.',
        symbol: 'OD',
        color: 'bg-blue-500',
    },
    {
        label: 'Delivered',
        description: 'Qui enim enim pariatur velit ea sit excepteur cillum proident officia deserunt nulla fugiat.',
        symbol: 'DL',
        color: 'bg-green-500',
    },
]

export const unSuccessfullList = [
    'Canceled',
    'Failed',
    'Refunded',
]

export default orderStatusType