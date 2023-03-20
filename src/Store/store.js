import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../Reducer/cartSlice";
import userSlice from "../Reducer/userSlice";

const store = configureStore(
  {
    reducer: {
      cart: cartSlice.reducer,
      user: userSlice.reducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
