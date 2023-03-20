import React from "react";
import { useSelector } from "react-redux";
import { selectUserDetails } from "../../Reducer/userSlice";
import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  const userDetail = useSelector(selectUserDetails);

  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      {userDetail ? (
        <h3>Welcome {userDetail.displayName}</h3>
      ) : (
        <h4>Welcome to my React Dhaba</h4>
      )}
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
