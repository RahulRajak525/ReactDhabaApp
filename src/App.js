import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Layout/Navbar";
import Meal from "./components/Meals/Meal";
import Cart from "./components/Cart/Cart";
import Welcome from "./components/Welcome/Welcome";
import { Routes, Route } from "react-router-dom";
import OrderHistory from "./components/Layout/OrderHistory";
import LogIn from "./components/Layout/LogIn";
import UserProfile from "./components/UserProfile/UserProfile";
import { getUserDataAction } from "./Reducer/asyncUserReducer";
import MyAccount from "./components/UserProfile/MyAccount";
import { selectUserDetails } from "./Reducer/userSlice";
import Footer from "./components/Layout/Footer";
import PassReset from "./components/UserProfile/PassReset";
import MealItem from "./components/Meals/MealItem";
import {
  addOrderSummaryAction,
  addToCartAction,
  getCartItemAction,
  getOrderSummaryAction,
} from "./Reducer/asyncCartReducer";

let isInitial = true;
function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const userDetail = useSelector(selectUserDetails);

  const newCart = {
    Items: cart.Items,
    totalAmount: cart.totalAmount,
    totalQuantity: cart.totalQuantity,
  };
  const orderedList = cart.orderedList;
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getUserDataAction());
    } else {
      return;
    }
  }, [isLoggedIn, dispatch]);

  useEffect(() => {
    if (userDetail !== undefined) {
      const localId = userDetail.localId;
      dispatch(getCartItemAction(localId));
      dispatch(getOrderSummaryAction(localId));
      dispatch(addToCartAction({ newCart, localId }));
    } else return;
  }, [userDetail, dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed && userDetail !== undefined) {
      const localId = userDetail.localId;
      dispatch(addToCartAction({ newCart, localId }));
      dispatch(addOrderSummaryAction({ orderedList, localId }));
    } else return;
  }, [cart, userDetail, dispatch]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Meal />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="mealItem" element={<MealItem />}></Route>
        <Route path="welcomePage" element={<Welcome />}></Route>
        <Route path="logInPage" element={<LogIn />}></Route>
        <Route path="myAccount" element={<MyAccount />}></Route>
        <Route path="orderHistory" element={<OrderHistory />}></Route>
        <Route path="userProfile" element={<UserProfile />}></Route>
        <Route path="passReset" element={<PassReset />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
