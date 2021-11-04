import {
    AdjustmentsIcon
} from '@heroicons/react/outline'
import { useSelector } from 'react-redux'
import { Menu } from '@headlessui/react'
import orderStatusType from '../../../../constants/orderStatusType'
import PrimaryTextButton from '../../../../Components/Button/PrimaryTextButton'

const FilterMenu = () => {
    const orderState = useSelector(state => state.order)
    return (
        <div className="flex justify-end relative">
            <Menu>
                <Menu.Button>
                    <PrimaryTextButton className="flex gap-2 items-center">
                        <span>
                            All orders
                        </span>
                        <AdjustmentsIcon className="w-5 h-5" />
                    </PrimaryTextButton>
                </Menu.Button>
                <Menu.Items className="mt-1 rounded-lg z-10 absolute right-0 top-full flex gap-0.5 flex-col items-stretch">
                    {
                        Object.values(orderStatusType).map((orderStatus, index) => {
                            return (
                                <Menu.Item 
                                    key="index" 
                                    as="button"
                                    className={`py-1.5 px-4 rounded-lg flex justify-start ${orderState.selectedFilter === orderStatus ? 'bg-primary-light' : 'bg-primary-varient'}`}
                                >
                                    {orderStatus.label}
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
