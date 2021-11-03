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
import registrationSlice from "./features/registration/registrationSlice"
import loginSlice from './features/login/loginSlice'
import userDetailSlice from "./features/userDetail/userDetailSlice"
import categoryListSlice from "./features/categoryList/categoryListSlice"
import latestProductSlice from "./features/latestProduct/latestProductSlice"
import productDetailSlice from "./features/productDetail/productDetailSlice"
import userAddressSlice from "./features/userAddress/userAddressSlice"
import cartSlice from "./features/cart/cartSlice"
import searchSlice from "./features/search/searchSlice"
import alertDialogSlice from "./features/alertDialog/alertDialogSlice"
import checkoutSlice from "./features/checkout/checkoutSlice"
import orderSlice from "./features/order/orderSlice"
import wishlistSlice from "./features/wishlist/wishlistSlice"


const reducers = combineReducers({
    registration: registrationSlice,
    login: loginSlice,
    userDetail: userDetailSlice,
    categoryList: categoryListSlice,
    latestProduct: latestProductSlice,
    productDetail: productDetailSlice,
    userAddress: userAddressSlice,
    cart: cartSlice,
    search: searchSlice,
    alertDialog: alertDialogSlice,
    checkout: checkoutSlice,
    order: orderSlice,
    wishlist: wishlistSlice,
});

const persistConfig = { 
    key: 'root',
    storage,
    whitelist: [ 
        "userDetail",
        "categoryList",
    ],
}

const persistedReducer = persistReducer(persistConfig, reducers);


const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, 'alertDialog/showDialog'],
        },
    }),
})

export let persistor = persistStore(store)

export default store