// Define action types
export const ADD_TO_CART = 'ADD_TO_CART';

// Action creator to add an item to the cart
export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});
