const orderStatusType = {
    startedPreparing: {
        label: 'Started Preparing',
        description: 'Your products are being prepared to be shipped by the seller.',
        symbol: 'PP',
        color: 'bg-gray-400',
    },
    shippedToYourArea: {
        label: 'Shipped to your area',
        description: 'The products has been shipped to your area and will soon be delivered.',
        symbol: 'SH',
        color: 'bg-yellow-400',
    },
    outForDelivery: {
        label: 'Out for delivery',
        description: 'Your products are out for delivery. You will soon receive your products.',
        symbol: 'OD',
        color: 'bg-blue-500',
    },
    delivered: {
        label: 'Delivered',
        description: 'Your products are delivered.',
        symbol: 'DL',
        color: 'bg-green-500',
    },
    canceled: {
        label: 'Canceled',
        description: 'The order is canceled.',
        symbol: 'CC',
        color: 'bg-black',
    },
    failed: {
        label: 'Failed',
        description: 'The order failed.',
        symbol: 'FI',
        color: 'bg-red-500',
    },
    refunded: {
        label: 'Refunded',
        description: 'The order is refunded.',
        symbol: 'RF',
        color: 'bg-black',
    },
}

export const onlySuccessOrderStatusType = [
    {
        label: 'Started Preparing',
        description: 'Your products are being prepared to be shipped by the seller.',
        symbol: 'PP',
        color: 'bg-gray-400',
    },
    {
        label: 'Shipped to your area',
        description: 'The products has been shipped to your area and will soon be delivered.',
        symbol: 'SH',
        color: 'bg-yellow-400',
    },
    {
        label: 'Out for delivery',
        description: 'Your products are out for delivery. You will soon receive your products.',
        symbol: 'OD',
        color: 'bg-blue-500',
    },
    {
        label: 'Delivered',
        description: 'Your products are delivered.',
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