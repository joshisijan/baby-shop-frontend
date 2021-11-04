const orderStatusType = {
    all: {
        label: 'All orders',
        color: 'text-blue-600',
    },
    completed: {
        label: 'Completed',
        color: 'text-blue-600',
    }, 
    canceled: {
        label: 'Canceled',
        color: 'text-gray-600',
    },
    pendingDelivery: {
        label: 'Pending delivery',
        color: 'text-red-600',
    },
    paymentPending: {
        label: 'Pending Payment',
        color: 'text-gray-600',
    },
    processing: {
        label: 'Processing',
        color: 'text-green-600',
    },
    refunded: {
        label: 'Refunded',
        color: 'text-gray-600',
    },
}

export default orderStatusType