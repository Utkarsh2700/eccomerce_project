// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   items: [],
//   status: "idle",
//   categories: [],
// };

// const productsSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {
//     setProducts: (state, action) => {
//       state.items = action.payload;
//     },
//     setCategories: (state, action) => {
//       state.categories = action.payload;
//     },
//   },
// });

// export const { setProducts, setCategories } = productsSlice.actions;
// export default productsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  byDiscount: [],
  byRating: [],
  byStock: [],
  status: "idle",
  categories: [],
  byCategory: [],
  items: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductsByDiscount: (state, action) => {
      state.byDiscount = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setProductsByRating: (state, action) => {
      state.byRating = action.payload;
    },
    setProductsByStock: (state, action) => {
      state.byStock = action.payload;
    },
    setProductsByCategory: (state, action) => {
      state.byCategory = action.payload;
    },
    setProducts: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const {
  setProductsByDiscount,
  setCategories,
  setProductsByRating,
  setProductsByStock,
  setProductsByCategory,
  setProducts,
} = productsSlice.actions;
export default productsSlice.reducer;
