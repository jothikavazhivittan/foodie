import { configureStore } from '@reduxjs/toolkit';
import productsSlice from '../slice/productsSlice'
import cartSlice from '../slice/cartSlice'
const store = configureStore({
    reducer: {
            products: productsSlice,
            cart: cartSlice,

    }
})
export default store;
