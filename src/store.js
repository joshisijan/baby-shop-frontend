// import { configureStore, combineReducers } from "@reduxjs/toolkit"
// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// import authSlice from "./features/auth/authSlice"
// import userSlice from './features/user/userSlice'
// import navMenuSlice from "./features/navMenu/navMenuSlice";
// import registerSlice from "./features/register/registerSlice"

// const reducers = combineReducers({
//     auth: authSlice,
//     user: userSlice,
//     register: registerSlice,
//     navMenu: navMenuSlice,
// });

// const persistConfig = {
//     key: 'root',
//     storage,
//     whitelist: ["user"],
// }

// const persistedReducer = persistReducer(persistConfig, reducers);


// const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware({
//         serializableCheck: {
//             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         },
//     }),
// })

// export let persistor = persistStore(store)

// export default store