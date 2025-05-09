// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';

import progressReducer from './progressSlice';
import profileReducer from './profileSlice';

// Combine your reducers
const rootReducer = combineReducers({
  progress: progressReducer,
  profile: profileReducer,
});

// Create persist config
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['profile'], // only persist 'profile' slice
};

// Wrap rootReducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store with the persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // required for redux-persist
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
