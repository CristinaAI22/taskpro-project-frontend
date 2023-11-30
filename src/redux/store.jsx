import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';
import { formReducer } from './form/formSlice';
import { loaderReducer } from './loader/loaderSlice';
import { forbiddenProductsReducer } from './form/forbiddenProductsSlice';
import storage from 'redux-persist/lib/storage'; 
import {
  persistStore,
  persistReducer, 
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    loader: loaderReducer,
    auth: persistReducer(persistConfig, authReducer),
    form: formReducer,
    forbiddenProducts: forbiddenProductsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
  

