"use client";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import bagState from "./slice/bagState";
import cartState from "./slice/cartState";
import { asosService } from "./fetchData/service";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  timeout: 150,
  key: "bag",
  storage,
};

const rootReducer = combineReducers({
  bagState,
  cartState
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: {
    state: persistedReducer,
    [asosService.reducerPath]: asosService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(asosService.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
