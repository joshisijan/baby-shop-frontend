const orderStatusType = {
    startedPreparing: {
        label: 'Started Preparing',
        color: 'bg-green-500',
    },
    paymentPending: {
        label: 'Pending Payment',
        color: 'bg-gray-400',
    },
    pendingDelivery: {
        label: 'Pending delivery',
        color: 'bg-red-500',
    },
    completed: {
        label: 'Completed',
        color: 'bg-blue-500',
    }, 
    canceled: {
        label: 'Canceled',
        color: 'bg-black',
    },
}

export default orderStatusType