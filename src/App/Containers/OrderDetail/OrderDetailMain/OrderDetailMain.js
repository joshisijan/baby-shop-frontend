import { useSelector } from 'react-redux'
import { unSuccessfullList } from '../../../constants/orderStatusType'
import ProductList from '../ProductList/ProductList'
import ProgressTimeline from '../ProgressTimeline/ProgressTimeline'
import ShippingInfo from '../ShippingInfo/ShippingInfo'
import UnsuccessfulOrder from './UnsuccessfulOrder/UnsuccessfulOrder'

const OrderDetailMain = () => {
    const orderDetailState = useSelector(state => state.orderDetail)
    const activeStatus = orderDetailState.data.order.track_status
    return (
        <div className="p-4">
            <h1 className="mb-2 text-xl font-bold">Order detail</h1>
            <div className="grid gap-4 md:grid-cols-2">
                <div>
                    <ShippingInfo />
                    {
                        unSuccessfullList.includes(activeStatus) ?
                        <UnsuccessfulOrder status={activeStatus} />
                        :
                        <ProgressTimeline />
                    }
                </div>
                <ProductList />
            </div>
        </div>
    )
}

export default OrderDetailMain
