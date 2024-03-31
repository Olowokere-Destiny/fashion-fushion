"use client";
import { configureStore } from "@reduxjs/toolkit";
import bagState from "./slice/bagState";
import { asosService } from "./fetchData/service";
import globalState from "./slice/globalState";
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
    global: globalState,
    bag: bagState,
    [asosService.reducerPath]: asosService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(asosService.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
