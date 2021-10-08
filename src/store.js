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

const reducers = combineReducers({
    registration: registrationSlice,
    login: loginSlice,
    userDetail: userDetailSlice,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["userDetail"],
}

const persistedReducer = persistReducer(persistConfig, reducers);


const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
})

export let persistor = persistStore(store)

export default store