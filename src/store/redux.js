import { createSlice, configureStore } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItemToCart: (state, action) => {
      const { id, name, price } = action.payload;
      const itemIndex = state.findIndex((item) => item.id === id);
      if (itemIndex === -1) {
        state.push({ id, name, price, quantity: 1 });
      } else {
        state[itemIndex].quantity++;
      }
    },
    removeItemFromCart: (state, action) => {
      const itemIndex = state.findIndex((item) => item.id === action.payload);
      if (itemIndex !== -1) {
        state.splice(itemIndex, 1);
      }
    },
    updateItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const itemIndex = state.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        state[itemIndex].quantity = quantity;
      }
    },
    clearCart: (state) => {
      state.splice(0, state.length);
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export const { addItemToCart, removeItemFromCart, updateItemQuantity, clearCart } =
  cartSlice.actions;

export default store;
