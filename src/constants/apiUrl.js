export const baseUrl = 'http://20.198.109.214'

// for user registration
export const registrationUrl = baseUrl + '/api/account/registration/'

// for user login
export const loginUrl = baseUrl + '/api/account/login/'

// for getting user detail
export const userUrl = baseUrl + '/api/account/user/'

// for refreshing access token
export const tokenRefreshUrl = baseUrl + '/api/account/token/refresh/'

// for getting category list
export const categoryListUrl = baseUrl + '/api/shop/category/'

// get latest product
export const latestProductListUrl = baseUrl + '/api/shop/products/latest/';

// get product detail
export const productDetailUrl = baseUrl + '/api/shop/product/'; //needs product product id at end and /


// address list
export const addressListUrl = baseUrl + '/api/account/address/';

// create new address

export const createAddressUrl = baseUrl + '/api/account/address/create/';

// cart item list
export const cartListUrl = baseUrl + '/api/shop/cart/';

// add to cart
export const addToCarttUrl = baseUrl + '/api/shop/cart/create/';

// remove cart item
// export const removeCartItemUrl = baseUrl + '/api/shop/cart/item/<int:id>/update/';


// search 
// params:
// // search: query text
// // ordering: (add - 'minus' for descending)
// // // ordering values are price, average_rating, created_at
// // // // can be attached at end of url like /?search=red+apple&ordering=price
export const searchUrl = baseUrl + '/api/shop/product/search/';



// checkout
export const checkoutUrl = baseUrl + '/api/shop/checkout/';

// checkoutAddressUpdate
export const checkoutAddressUpdateUrl = baseUrl + '/api/shop/checkout/'; //needs id at last 

// payment
export const esewaPaymentUrl = baseUrl + '/payment/esewa/'; //needs orderId

export const khaltiPaymentUrl = baseUrl + '/payment/khalti/'; //needs orderId

// order

// order list
export const orderListUrl = baseUrl + '/api/shop/order/';

// order detail
export const orderDetailUrl = baseUrl + '/api/shop/order/'; //needs orderId