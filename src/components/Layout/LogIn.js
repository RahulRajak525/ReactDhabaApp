import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import classes from "./LogIn.module.css";
import { cartActions } from "../../Reducer/cartSlice";
const LogIn = () => {
  const dispatch = useDispatch();
  const pageIsVisible = useSelector((state) => state.cart.visible);
  const showPageHandler = () => {
    dispatch(cartActions.toggle());
  };
  return (
    <div>
      <div className={classes.logInPage}>
        <div className={classes.formgroup}>
          <div className={classes.signin}>
            <button onClick={showPageHandler}>Sign in</button>
          </div>
          <div className={classes.signup}>
            <button onClick={showPageHandler}>Sign up</button>
          </div>
        </div>
        <div className={classes.primary}>
          {pageIsVisible ? <SignUp /> : <SignIn />}
        </div>
      </div>
    </div>
  );
};

export default LogIn;
