import { Box, Button, IconButton, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../Reducer/cartSlice";
import classes from "./Cart.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-toastify";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mealItem = useSelector((state) => state.cart.Items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const isPending = useSelector((state) => state.cart.isPending);
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const increaseQuantityHandler = (item) => {
    dispatch(cartActions.addItemsToCart(item));
  };

  const decreaseQuantityHandler = (item) => {
    dispatch(cartActions.removeItemFromCart(item));
  };
  const backToHomepageHandler = () => {
    navigate("/");
  };
  const orderedPageHandler = (mealItem) => {
    if (isLoggedIn) {
      if (mealItem.item.length === 0) {
        toast.warn("Please add Item to cart and then order");
        return;
      } else {
        dispatch(cartActions.orderedItemFromCart(mealItem));
        toast.success("Your order is placed.");
        navigate("/welcomePage");
      }
    } else {
      toast.warn("Please login First....");
      return;
    }
  };

  return (
    <div>
      {isPending ? (
        <div className={classes.order}>
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        </div>
      ) : (
        <>
          <div className={classes.order}>
            {mealItem.length !== 0 ? (
              mealItem.map((item) => (
                <ol key={item.uuid} className={classes.cart}>
                  <div className={classes.content}>
                    <img src={item.img} alt={item.title} loading="lazy" />
                  </div>
                  <Typography variant="h6" gutterBottom>
                    {item.name}
                    <span className={classes.subTotal}>
                      ${item.totalPrice.toFixed(2)}
                    </span>
                  </Typography>
                  <div>
                    ${item.price}
                    <div className={classes.action}>
                      <IconButton
                        className={classes.btn}
                        onClick={() => decreaseQuantityHandler(item)}
                      >
                        <RemoveIcon fontSize="small" color="success" />
                      </IconButton>
                      <span>{item.quantity}</span>
                      <IconButton
                        className={classes.btn}
                        onClick={() => increaseQuantityHandler(item)}
                      >
                        <AddIcon fontSize="small" color="success" />
                      </IconButton>
                    </div>
                  </div>
                </ol>
              ))
            ) : (
              <h2 style={{ fontFamily: "cursive" }}>
                No Items In The Cart, Kindly Start Ordering...
              </h2>
            )}
            <div className={classes.totalContent}>
              {totalAmount < 1 ? (
                <></>
              ) : (
                <>
                  <div className={classes.totaTitle}>
                    <h3> Total Amount:</h3>
                  </div>
                  <div className={classes.totalAmount}>
                    <h3>${totalAmount.toFixed(2)}</h3>
                  </div>
                </>
              )}
            </div>
            <div className={classes.actions}>
              <Button
                color="success"
                onClick={() =>
                  orderedPageHandler({ item: mealItem, amount: totalAmount })
                }
              >
                Order
              </Button>
              <Button color="error" onClick={backToHomepageHandler}>
                Cancel
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
