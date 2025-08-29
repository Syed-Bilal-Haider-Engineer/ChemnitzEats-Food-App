import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pizza } from "../data/menu-items";

type CartItem = Pizza & { quantity: number };
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
    }
   }
});

export const { addItemToCart } = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;