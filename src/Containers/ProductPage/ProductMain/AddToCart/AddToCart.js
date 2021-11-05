import React from 'react'
import SecondaryTextButton from '../../../../Components/Button/SecondaryTextButton'
import { HeartIcon } from '@heroicons/react/outline'
import { HeartIcon as FilledHeartIcon } from '@heroicons/react/solid'
import DarkOutlineTextButton from '../../../../Components/Button/DarkOutlineTextButton'
import { useDispatch, useSelector } from 'react-redux'
import { changeActiveColor, setActiveSizeIndex, setSelectedQuantity } from '../../../../features/productDetail/productDetailSlice'
import ProductQuantitySelector from '../ProductQuantitySelector/ProductQuantitySelector'
import FadeTransition from '../../../../Components/Transition/FadeTransition'
import LoadingOverlay from '../../../../Components/LoadingOverlay/LoadingOverlay'
import { addCartItem } from '../../../../features/cart/cartAction'
import CircularProgressIndicator from '../../../../Components/CircularProgressIndicator/CircularProgressIndicator'
import { addToWishlistFromProduct, removeFromWishlistFromProduct } from '../../../../features/wishlist/wishlistAction'

const AddToCart = () => {
    const dispatch = useDispatch()
    // class name for style 
    const activeColor = "ring-2 ring-offset-1 ring-secondary-dark-extra ring-offset-white";
    const activeSize = "bg-black text-white";

    // states
    const wishlistState = useSelector(state => state.wishlist)
    const cartState = useSelector(state => state.cart)
    const productDetailState = useSelector(state => state.productDetail)
    const productVarientData = productDetailState.data.product_variant
    const activeProductData = productDetailState.data.activeProductDetail
    const activeSizeIndex = productDetailState.activeSizeIndex
    const quantity = productDetailState.selectedQuantity
    const isInWatchlist = activeProductData.sizes[activeSizeIndex].in_wishlist
    let canAddInCart = activeProductData.sizes[activeSizeIndex].max_qty_for_cart > 0;


    const handleChangeColor = (data) => {
        dispatch(changeActiveColor(data));
    }

    const handleAddToCart = () => {
        dispatch(addCartItem({
            data: {
                inventory: activeProductData.sizes[activeSizeIndex].inventory_id,
                quantity,
            },
            productId: productDetailState.data.product.id,
        }));
    }

    const handleWishlistAdd = () => {
        dispatch(addToWishlistFromProduct(activeProductData.sizes[activeSizeIndex].inventory_id));
    }

    const handleWishlistRemove = () => {
        dispatch(removeFromWishlistFromProduct(activeProductData.sizes[activeSizeIndex].inventory_id));
    }

    const setQuantity = (value) => {
        dispatch(setSelectedQuantity(value))
    }

    return (
        <div className="space-y-4">
            <FadeTransition show={cartState.isAdding}>
                <LoadingOverlay label="Adding to cart..." />
            </FadeTransition>
            <div className="space-y-1">
                <span className="text-xs font-semibold">Color</span>
                <div className="mt-1 flex gap-2 flex-wrap">
                    {
                        Object.values(productVarientData).map((productColor, index) => {
                            return (
                                <button
                                    key={index}
                                    onClick={() => handleChangeColor(productColor)}
                                    style={{ backgroundColor: `${productColor.color.code}` }}
                                    className={`w-8 h-8 rounded-full transition transform hover:-translate-y-0.5 ${activeProductData === {} ? '' : activeProductData.color.id === productColor.color.id ? activeColor : ''}`}
                                >
                                </button>
                            )
                        })
                    }
                </div>
            </div>
            <div className="space-y-1">
                <span className="text-xs font-semibold">Size</span>
                <div className="mt-1 flex gap-2 flex-wrap">
                    {
                        activeProductData.sizes.map((size, index) => {
                            return (
                                <DarkOutlineTextButton
                                    key={index}
                                    disabled={size.symbol === null}
                                    onClick={() => dispatch(setActiveSizeIndex(index))}
                                    className={`px-6 ${activeSizeIndex === index ? activeSize : ''}`}
                                >
                                    {
                                        size.symbol ?? 'free size'
                                    }
                                </DarkOutlineTextButton>
                            );
                        })
                    }
                </div>
            </div>

            <div className="space-y-1">
                <span className="text-xs font-semibold">Quantity</span>
                {
                    activeProductData.sizes[activeSizeIndex].max_qty_for_cart > 0 ?
                        <ProductQuantitySelector
                            quantity={quantity}
                            setQuantity={setQuantity}
                            availableQuantity={activeProductData.sizes[activeSizeIndex].max_qty_for_cart}
                        />
                        :
                        <div className="text-red-600 font-medium">
                            Maximum quantity already in cart.
                        </div>
                }
                <div className="text-right">
                    <span className="text-sm font-medium">
                        Available quantity: &nbsp;
                        <span className="text-red-600">
                            {activeProductData.sizes[activeSizeIndex].available_quantity}
                        </span></span>
                </div>
                {
                    productDetailState.auth ?
                        <div className="text-right">
                            <span className="text-sm font-medium">
                                Already in cart: &nbsp;
                                <span className="text-red-600">
                                    {
                                        activeProductData.sizes[activeSizeIndex].available_quantity - activeProductData.sizes[activeSizeIndex].max_qty_for_cart
                                    }
                                </span></span>
                        </div>
                        : null
                }
            </div>

            <div className="flex items-center gap-4 relative">
                {/* overlay */}
                {
                    !productDetailState.auth ?
                        <div className="absolute inset-0 bg-primary z-10 text-red-700 flex items-center justify-center">
                            Login to add to cart and wishlist
                        </div>
                        : null
                }
                <div className="flex-1">
                    <SecondaryTextButton
                        disabled={!canAddInCart}
                        onClick={handleAddToCart}
                        className={`w-full ${!canAddInCart ? 'cursor-not-allowed' : ''}`}
                    >
                        Add to cart
                    </SecondaryTextButton>
                </div>
                {
                    wishlistState.isAdding || wishlistState.isRemoving ?
                        <div className="w-5 h-5">
                            <CircularProgressIndicator />
                        </div>
                        :
                        isInWatchlist ?
                            <button onClick={handleWishlistRemove}>
                                <FilledHeartIcon className="w-6 h-6 text-red-500" />
                            </button>
                            :
                            <button onClick={handleWishlistAdd}>
                                <HeartIcon className="w-6 h-6 cursor-pointer transition text-gray-600 hover:text-secondary-dark-extra" />
                            </button>
                }
            </div>
        </div>
    )
}

export default AddToCart
