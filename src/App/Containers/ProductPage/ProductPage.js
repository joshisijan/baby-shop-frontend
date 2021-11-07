import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductDetail } from '../../features/productDetail/productDetailAction'
import { useParams } from 'react-router-dom'
import ProductError from './ProductError/ProductError'
import ProductMain from './ProductMain/ProductMain'
import ProductLoading from './ProductLoading/ProductLoading'

const ProductPage = () => {
    const { id } = useParams();

    const productDetailState = useSelector(state => state.productDetail)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductDetail(id));
    }, [dispatch, id]);
    return (
        <div>
            {
                productDetailState.isLoading || productDetailState.data === null ?
                    <ProductLoading />
                    :
                    productDetailState.error ?
                        <ProductError productId={id} /> :
                        <ProductMain />
            }
        </div>
    )
}

export default ProductPage
