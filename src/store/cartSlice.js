import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      // state.totalAmount += action.payload.price;
      // console.log(addItem);
    },
    //caused error when clicked on remove button

    // removeItem: (state, action) => {
    //   const itemToRemove = state.items.find(
    //     (item) => item.id === action.payload.id
    //   );
    //   if (itemToRemove) {
    //     // state.totalAmount -= itemToRemove.price;
    //     return state.items.filter((item) => item.id !== action.payload.id);
    //   }
    // },

    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
      totalAmount = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
