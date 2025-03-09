import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from "../actions/cardActions";

const initialState = {
  cartItems: [],  
};

const cartSlice = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const productExists = state.cartItems.find(item => item.id === action.payload.id);
      if (productExists) {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1, totalPrice: item.price * (item.quantity + 1) }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [
            ...state.cartItems,
            { ...action.payload, quantity: 1, totalPrice: action.payload.price },
          ],
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload),
      };

    case UPDATE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.productId
            ? { ...item, quantity: action.payload.quantity, totalPrice: item.price * action.payload.quantity }
            : item
        ),
      };

    default:
      return state;
  }
};

export default cartSlice;
