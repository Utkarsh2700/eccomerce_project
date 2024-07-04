import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: [],
  },
  reducers: {
    addToWishList: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromWishList: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToWishList, removeFromWishList } = wishlistSlice.actions;

export const selectIsInWishlist = (state, productId) =>
  state.wishlist.items.some((item) => item.id === productId);

export default wishlistSlice.reducer;
