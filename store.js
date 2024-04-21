
import { configureStore } from "@reduxjs/toolkit";
import stuReducer from "./stuloginSlice";
import adminReducer from "./adminSlice";

import storage from 'redux-persist/lib/storage';

import { persistReducer, persistStore } from 'redux-persist';
const persistConfig = {
    key: 'root',
    storage,
  }

const studentpersistedReducer = persistReducer(persistConfig, stuReducer);
const adminpersistedReducer = persistReducer(persistConfig, adminReducer);

export const  store=configureStore({
    reducer:{
        stulogin:studentpersistedReducer,
        adminuser: adminpersistedReducer,
    }
});

export const persistor = persistStore(store);

export default store;