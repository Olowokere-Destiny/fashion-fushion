"use client";
import { configureStore } from "@reduxjs/toolkit";
import bagState from "./slice/state";
import { asosService } from "./fetchData/service";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "root",
//   storage
// }

// const rootReducer = combineReducers({
//     testSlice,
// })

// const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: {
    state: bagState,
    [asosService.reducerPath]: asosService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(asosService.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
