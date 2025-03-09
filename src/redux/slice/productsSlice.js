import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  selectedCategory: 'All',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setProducts, setCategory } = productsSlice.actions;
export default productsSlice.reducer;
