import {
    AdjustmentsIcon
} from '@heroicons/react/outline'
import { useSelector, useDispatch } from 'react-redux'
import { Menu } from '@headlessui/react'
import orderStatusType from '../../../../constants/orderStatusType'
import PrimaryTextButton from '../../../../Components/Button/PrimaryTextButton'
import { resetSelectedFilter, setSelectedFilter } from '../../../../features/order/orderSlice'

const FilterMenu = () => {
    const dispatch = useDispatch()
    const orderState = useSelector(state => state.order)

    const handleFilterChange = (filter) => {
        dispatch(setSelectedFilter(filter))
    }

    return (
        <div className="flex justify-end relative">
            <Menu>
                <Menu.Button>
                    {
                        orderState.selectedFilter === null ?
                            <PrimaryTextButton className="flex gap-2 items-center">
                                <span>All orders</span>
                                <AdjustmentsIcon className="w-5 h-5" />
                            </PrimaryTextButton>
                            :
                            <PrimaryTextButton className="flex gap-2 items-center">
                                <span className="flex gap-2 items-center">
                                    <div className={`w-2.5 h-2.5 rounded-full ${orderState.selectedFilter.color}`}></div>
                                    {orderState.selectedFilter.label}
                                </span>
                                <AdjustmentsIcon className="w-5 h-5" />
                            </PrimaryTextButton>
                    }
                </Menu.Button>
                <Menu.Items className="mt-1 rounded-lg z-10 absolute right-0 top-full flex gap-2 flex-col items-stretch border p-2 bg-white">
                    {
                        orderState.selectedFilter !== null ?
                        <Menu.Item
                            as="button"
                            onClick={() => dispatch(resetSelectedFilter())}
                            className="py-1.5 px-4 rounded-lg flex justify-start bg-primary-varient"
                        >
                            All orders
                        </Menu.Item>
                        : null
                    }
                    {
                        Object.values(orderStatusType).map((status, index) => {
                            return (
                                <Menu.Item
                                    key={index}
                                    as="button"
                                    onClick={() => handleFilterChange(status)}
                                    className={`py-1.5 px-4 rounded-lg flex gap-2 items-center justify-start ${orderState.selectedFilter === status ? 'bg-primary-light' : 'bg-primary-varient'}`}
                                >
                                    <div className={`w-2.5 h-2.5 rounded-full ${status.color}`}></div> {status.label}
                                </Menu.Item>
                            )
                        })
                    }
                </Menu.Items>
            </Menu>
        </div>
    )
}

export default FilterMenu
