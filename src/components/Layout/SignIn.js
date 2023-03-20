import {
  Avatar,
  Button,
  FormControl,
  IconButton,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Reducer/cartSlice";
import { signInAction } from "../../Reducer/asyncUserReducer";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showPageHandler = () => {
    dispatch(cartActions.toggle());
  };
  const paperStyle = {
    padding: 20,
    margin: "20px auto",
    width: "350px",
  };
  const avatarStyle = { backgroundColor: "#06cd83" };
  const passStyle = { margin: "10px auto " };
  const btnStyle = { margin: "8px 0 " };
  const textfield = { width: "100%" };

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const userEmailChangeHandler = (e) => {
    e.preventDefault();
    setUserEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const loginButtonClickHandler = (e) => {
    e.preventDefault();
    if (userEmail.length===0 || password.length===0) {
      toast.warn("All fields are mandatory!");
      return;
    } else {
      dispatch(
        signInAction({
          userEmail: userEmail,
          password: password,
        })
      );
      navigate("/");
    }
    setUserEmail("");
    setPassword("");
  };

  return (
    <div>
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Sign In</h2>
          </Grid>
          <TextField
            style={textfield}
            type="email"
            id="outlined-textarea"
            label="Email"
            placeholder="e.g. elon@gmail.com"
            onChange={userEmailChangeHandler}
            value={userEmail}
          />
          <FormControl fullWidth variant="outlined" style={passStyle}>
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              placeholder="e.g. elon125@"
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              onChange={passwordChangeHandler}
              value={password}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
            style={btnStyle}
            onClick={loginButtonClickHandler}
          >
            Log In
          </Button>
          <Typography>
            <Link to="/passReset">Forget Password ?</Link>
          </Typography>
          <Typography fullWidth>
            Do you have an account ?
            <button
              onClick={showPageHandler}
              style={{
                border: "none",
                background: "transparent",
                cursor: "pointer",
                color: "blue",
              }}
            >
              Sign up
            </button>
          </Typography>
        </Paper>
      </Grid>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default SignIn;
