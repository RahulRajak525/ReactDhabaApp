import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Stack,
  Menu,
  MenuItem,
  Avatar,
  Box,
  Typography,
} from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { HeaderCartButton } from "./HeaderCartButton";
import classes from "./Navbar.module.css";
import mealsImage from "../../Assets/meals.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUserDetails, userActions } from "../../Reducer/userSlice";
import { cartActions } from "../../Reducer/cartSlice";
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState("");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const userDetail = useSelector(selectUserDetails);

  const logOutButtonHandler = () => {
    dispatch(userActions.logOut());
    dispatch(cartActions.logout());
    navigate("/");
  };
  const goToOrderPage = () => {
    navigate("/orderHistory");
  };

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Stack direction="row">
            <IconButton size="large" color="inherit" aria-label="logo">
              <RestaurantIcon />
            </IconButton>
            <Link
              to="/"
              variant="h2"
              style={{
                textDecoration: "none",
                color: "white",
                paddingTop: "5px",
                marginLeft: "25px",
                letterSpacing: "0.25rem",
                fontWeight: "700",
              }}
            >
              REACT DHABA
            </Link>
          </Stack>
          <div className={classes.nav}>
            <div>
              <Stack direction="row" spacing={4}>
                {!isLoggedIn ? (
                  <Link
                    to="/logInPage"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      marginRight: "15px",
                      paddingTop: "10px",
                    }}
                  >
                    Log In
                  </Link>
                ) : (
                  <>
                    <Typography
                      onClick={goToOrderPage}
                      style={{
                        textDecoration: "none",
                        color: "white",
                        marginRight: "15px",
                        paddingTop: "15px",
                      }}
                    >
                      Your Orders
                    </Typography>
                    <Box>
                      <div className={classes.primary}>
                        <div className={classes.avatarButton}>
                          <button id="basic-button" onClick={handleClick}>
                            {userDetail && (
                              <Avatar
                                style={{
                                  width: "47px",
                                  height: "59px",
                                  marginRight: "15px",
                                }}
                                alt="Remy Sharp"
                                src={userDetail.photoUrl}
                              />
                            )}
                          </button>
                        </div>
                        <Menu
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                        >
                          <MenuItem onClick={handleClose}>
                            <Link
                              to="/userProfile"
                              style={{
                                textDecoration: "none",
                                color: "black",
                              }}
                            >
                              Update Profile
                            </Link>
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            <Link
                              to="/myAccount"
                              style={{
                                textDecoration: "none",
                                color: "black",
                              }}
                            >
                              My Account
                            </Link>
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            <Link
                              to="/passReset"
                              style={{
                                textDecoration: "none",
                                color: "black",
                              }}
                            >
                              Reset Password
                            </Link>
                          </MenuItem>

                          <MenuItem onClick={logOutButtonHandler}>
                            Logout
                          </MenuItem>
                        </Menu>
                      </div>
                    </Box>
                  </>
                )}
              </Stack>
            </div>
            <Link to="/cart">
              <HeaderCartButton />
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </div>
  );
};
export default Navbar;
