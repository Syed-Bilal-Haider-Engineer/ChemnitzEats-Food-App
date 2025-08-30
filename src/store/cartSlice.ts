import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pizza } from "../data/menu-items";
import { RootState } from "./store";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export type CartItem = Pizza & { quantity: number };
interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
        items: [],
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart: (state, action:PayloadAction<Pizza>) => {
            console.log("Adding item to cart", action.payload);
            const matchingItem = state.items.find((existingItem) => existingItem.id === action.payload.id);
            if (matchingItem) {
                matchingItem.quantity++;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
           }
        },
        removeItemFromCart: (state, action:PayloadAction<Pizza>) => {
            state.items = state.items.filter(existingItem => existingItem.id !== action.payload.id);
       },
        quantityDecrementInCart: (state, action:PayloadAction<Pizza>) => {
            const matchingItem = state.items.find((existingItem) => existingItem.id === action.payload.id);
            if (matchingItem && matchingItem.quantity > 0) {
                matchingItem.quantity--;
            }
       },
       resetCart:(state) =>{
        state.items = [];
       }
   }
});

export const { addItemToCart,removeItemFromCart,quantityDecrementInCart,resetCart } = cartSlice.actions;

const persistConfig = {
  key: 'carts',
  storage,
}
const persistedCartReducer = persistReducer(persistConfig, cartSlice.reducer);

export default persistedCartReducer;

export const selectCartItems = (state:RootState) =>{
  return state.cart.items;
} 

export const selectTotalItemsInCart = (state:RootState) => { 
    return state.cart.items.reduce((total, item) => total + item.quantity, 0);
}

export const selectTotalPriceInCart = (state:RootState) => { 
    return state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);
}

export const selectQuantityPerItem = (item:Pizza) => {
    return (state:RootState) => {
    const matchingItemQuantity = state.cart.items.find((existingItem) => existingItem.id === item.id);
    return matchingItemQuantity?.quantity || 0;
    }
}
