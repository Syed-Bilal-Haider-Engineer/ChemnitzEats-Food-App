import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { CartItem } from "./cartSlice";
import { RootState } from "./store";

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  creditCardNumber: string;
  state: "pending" | "completed" | "failed";
}

interface OrdersState {
  items: Order[];
}

const initialState: OrdersState = {
  items: [],
};

const maskCardNumber = (cardNumber:string) => {
  console.log("Masking card number", cardNumber);
  if (cardNumber?.length <= 4) return cardNumber;
  return cardNumber?.slice(-4).padStart(cardNumber.length, "*");
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    createOrder: (state, action: PayloadAction<Order>) => {
     const creditCardNum = action.payload.creditCardNumber;
     console.log("Creating order with card number", creditCardNum);
     const maskedOrder: Order = {
        ...action.payload,
        creditCardNumber: maskCardNumber(creditCardNum),
      };
      state.items.push(maskedOrder);
    },
    removeOrder: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (existingOrder) => existingOrder.id !== action.payload
      );
    }
  },
});

export const { createOrder, removeOrder } = ordersSlice.actions;

const persistConfig = {
  key: "orders",
  storage,
};

const persistedOrdersReducer = persistReducer(
  persistConfig,
  ordersSlice.reducer
);

export const selectOrderItems = (state:RootState) =>{
  return state.orders.items;
} 

export default persistedOrdersReducer;

