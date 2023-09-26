import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./userSlice";
import cartReducer from "./cartReducer"; // Import your cart reducer

export default configureStore({
    reducer: {
        user: userSlice,
        cart: cartReducer, // Include the cart reducer in your store
    },
});
// store.js

