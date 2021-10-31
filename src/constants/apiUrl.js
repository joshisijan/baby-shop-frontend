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

export const productDetailUrl = baseUrl + '/api/shop/product/'; //needs product product id at end and /


// address list
export const addressListUrl = baseUrl + '/api/account/address/';

// create new address

export const createAddressUrl = baseUrl + '/api/account/address/create/';

// cart item list
export const cartListUrl = baseUrl + '/api/shop/cart/';



// search 
// params:
// // search: query text
// // ordering: (add - 'minus' for descending)
// // // ordering values are price, average_rating, created_at
// // // // can be attached at end of url like /?search=red+apple&ordering=price
export const searchUrl = baseUrl + '/api/shop/product/search/';