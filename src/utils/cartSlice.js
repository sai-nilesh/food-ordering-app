import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity += 1;
      state.totalAmount += action.payload.price || action.payload.defaultPrice;
    },
    removeFromCart: (state, action) => {
        const itemToRemove = state.cartItems.filter((item) => item.id === action.payload);
        if (itemToRemove) {
          state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
          state.totalQuantity -= itemToRemove.quantity;
          state.totalAmount -= itemToRemove.price * itemToRemove.quantity;
          
        }
      },

    updateQuantity: (state, action) => {
      const itemToUpdate = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (itemToUpdate) {
        const newQuantity = action.payload.quantity;
        if (newQuantity > 0) {
          itemToUpdate.quantity = newQuantity;
          state.totalQuantity += newQuantity - itemToUpdate.quantity;
          state.totalAmount +=
            (newQuantity - itemToUpdate.quantity) * (itemToUpdate.price||itemToUpdate.defaultPrice);
        } else {
          // Remove item if quantity becomes 0
          state.removeFromCart(action.payload);
        }
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
