import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import authReducer from './slices';
import {rootReducer} from './reducer'


import { 
    persistStore,
     persistReducer,
     FLUSH,
     REHYDRATE,
     PAUSE,
     REGISTER,
     PERSIST,
     PURGE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
    key: "authToken",
    storage,
    whitelist: ["token"],
}

const authPersistReduser = persistReducer (authPersistConfig,authReducer);

export const store = configureStore ({
    reducer: {
        auth: authPersistReduser,
        phonebook: rootReducer
    },
    middleware: (getDefaultMiddleware)=>
    getDefaultMiddleware ({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, REGISTER, PERSIST, PURGE]
        }
    })
});

export const persistor = persistStore(store);