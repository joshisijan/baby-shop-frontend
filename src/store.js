import { configureStore, combineReducers } from "@reduxjs/toolkit"
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import registrationSlice from "./App/features/registration/registrationSlice"
import loginSlice from './App/features/login/loginSlice'
import userDetailSlice from "./App/features/userDetail/userDetailSlice"
import categoryListSlice from "./App/features/categoryList/categoryListSlice"
import latestProductSlice from "./App/features/latestProduct/latestProductSlice"
import productDetailSlice from "./App/features/productDetail/productDetailSlice"
import userAddressSlice from "./App/features/userAddress/userAddressSlice"
import cartSlice from "./App/features/cart/cartSlice"
import searchSlice from "./App/features/search/searchSlice"
import alertDialogSlice from "./App/features/alertDialog/alertDialogSlice"
import checkoutSlice from "./App/features/checkout/checkoutSlice"
import orderSlice from "./App/features/order/orderSlice"
import wishlistSlice from "./App/features/wishlist/wishlistSlice"
import verifyPaymentSlice from "./App/features/verifyPayment/verifyPaymentSlice"
import orderDetailSlice from "./App/features/orderDetail/orderDetailSlice"
import categoryProductSlice from "./App/features/categoryProduct/categoryProductSlice"


const reducers = combineReducers({
    registration: registrationSlice,
    login: loginSlice,
    userDetail: userDetailSlice,
    categoryList: categoryListSlice,
    categoryProduct: categoryProductSlice,
    latestProduct: latestProductSlice,
    productDetail: productDetailSlice,
    userAddress: userAddressSlice,
    cart: cartSlice,
    search: searchSlice,
    alertDialog: alertDialogSlice,
    checkout: checkoutSlice,
    order: orderSlice,
    orderDetail: orderDetailSlice,
    wishlist: wishlistSlice,
    verifyPayment: verifyPaymentSlice,
});

const persistConfig = { 
    key: 'root',
    storage,
    whitelist: [ 
        "userDetail",
    ],
}

const persistedReducer = persistReducer(persistConfig, reducers);


const store = configureStore({
    devTools: false,
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, 'alertDialog/showDialog'],
        },
    }),
})

export let persistor = persistStore(store)

export default store