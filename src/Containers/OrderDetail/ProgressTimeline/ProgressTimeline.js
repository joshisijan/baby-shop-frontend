import React from 'react'
import { useSelector } from 'react-redux'
import orderStatusType, { onlySuccessOrderStatusType } from '../../../constants/orderStatusType'

const ProgressTimeline = () => {
    const activeBallColor = 'bg-blue-500'
    const activeLineColor = 'bg-blue-300'
    const inactiveBallColor = 'bg-gray-400'
    const inactiveLineColor = 'bg-gray-300'
    const inactiveTextColor = 'text-gray-400'
    const orderDetailState = useSelector(state => state.orderDetail)
    const activeStatus = orderDetailState.data.order.track_status
    let activeIndex = 0 //index Of Active Statue On Only Success List

    // setting active index
    onlySuccessOrderStatusType.map((type, index) => {
        if(type.label === activeStatus) {
            activeIndex = index
        }
        return null
    })

    return (
        <div className="border p-4 rounded-b-lg">
            {/* <div className="font-medium text-sm">
                Preparing to ship on December 26,2021
            </div> */}
            <div className="py-4">
                {
                    onlySuccessOrderStatusType.map((type, index) => {
                        return (
                            <div key={index} className="px-4 flex gap-2">
                                <div className="flex flex-col items-center">
                                    <div className={`w-5 h-5 rounded-full ${index <= activeIndex ? activeBallColor : inactiveBallColor}`}></div>
                                    <div className={`flex-1 w-1 ${index <= activeIndex ? activeLineColor : inactiveLineColor}`}></div>
                                </div>
                                <div style={{ marginTop: -2 }} className={`${index <= activeIndex ? '' : inactiveTextColor}`}>
                                    <h1 className="font-semibold">{type.label}</h1>
                                    <p className="py-2.5 text-sm">
                                        {type.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
                <div className="px-4 flex gap-2">
                    <div className="flex flex-col items-center">
                        <div className={`w-5 h-5 rounded-full ${ activeStatus === orderStatusType.delivered.label ? activeBallColor : inactiveBallColor }`}></div>
                    </div>
                    <div style={{ marginTop: -2 }} className={`${ activeStatus === orderStatusType.delivered.label ? '' : inactiveTextColor }`}>
                        <h1 className="font-semibold">Can be reviewed</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProgressTimeline
