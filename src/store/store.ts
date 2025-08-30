import { configureStore } from "@reduxjs/toolkit";
import persistedCartReducer from "./cartSlice";
import { persistStore } from "redux-persist";
import persistedOrdersReducer from "./ordersSlice";

export const store = configureStore({
    reducer:{
      cart: persistedCartReducer,
      orders: persistedOrdersReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

