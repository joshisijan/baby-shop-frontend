import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductDetail } from '../../features/productDetail/productDetailAction'
import AddToCart from './AddToCart/AddToCart'
import ImageContainer from './ImageContainer/ImageContainer'
import RatingContainer from './RatingContainer/RatingContainer'
import RecentReviewContainer from './RecentReviewContainer/RecentReviewContainer'
import { useParams } from 'react-router-dom'
import ProductError from './ProductError/ProductError'
import ProductPrice from './ProductPrice/ProductPrice'

const ProductPage = () => {
    const { id } = useParams();

    const productDetailState = useSelector(state => state.productDetail);
    const productDetailData = productDetailState.data.product;
    const activeProductData = productDetailState.data.activeProductDetail
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductDetail(id));
    }, [dispatch, id]);
    return (
        <div>
            {
                productDetailState.isLoading ?
                    <div className="px-4 py-6">Loading product detail...</div> :
                    productDetailState.error || productDetailState.data === null ? 
                    <ProductError productId={id} /> :
                    <div className="mx-auto p-4 max-w-6xl text-gray-800">
                        {/* main product section */}
                        <div className="grid gap-4 sm:grid-cols-2">
                            {/* name and rating for smmaller devices */}
                            <div className="sm:hidden py-2 space-y-2">
                                <div className="gap-2 flex flex-wrap justify-between text-xl font-semibold">
                                    <div className="font-medium">{productDetailData.name}</div>
                                    <ProductPrice price={productDetailData.price} discount={productDetailData.discount_percentage} />
                                </div>
                                <RatingContainer averageRating={productDetailData.average_rating} totalReview={productDetailData.total_reviews} />
                            </div>
                            {/* image continer */}
                            <ImageContainer imageList={activeProductData.images} />
                            <div className="space-y-2">
                                <div className="hidden py-2 gap-2 sm:flex flex-wrap justify-between text-xl font-semibold">
                                    <div className="font-medium">{productDetailData.name}</div>
                                    <ProductPrice price={productDetailData.price} discount={productDetailData.discount_percentage} />
                                </div>
                                <RatingContainer className="hidden sm:flex" averageRating={productDetailData.average_rating} totalReview={productDetailData.total_reviews} />
                                <AddToCart />
                                <div>
                                    <h1 className="font-bold">Description</h1>
                                    <p>
                                        {productDetailData.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-16">
                            <h1 className="font-bold text-lg">Recent reviews</h1>
                            <hr className="my-4" />
                            <RecentReviewContainer />
                        </div>
                    </div>
            }
        </div>
    )
}

export default ProductPage
