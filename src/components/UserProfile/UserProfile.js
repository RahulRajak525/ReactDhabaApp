import React, { useState } from "react";
import {  useDispatch } from "react-redux";
import {
  Button,
  FormControl,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import classes from "./UserProfile.module.css";
import {
  getUserDataAction,
  updateProfileaction,
} from "../../Reducer/asyncUserReducer";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const paperStyle = {
    padding: 20,
    margin: "20px auto",
    width: "350px",
  };
  const passStyle = { margin: "10px auto " };
  const btnStyle = { margin: "8px 0 " };

  const [displayName, setDisplayName] = useState(undefined);
  const [photoUrl, setPhotoUrl] = useState(undefined);

  const nameChangeHandler = (e) => {
    setDisplayName(e.target.value);
  };
  const photoUrlChangeHandler = (e) => {
    setPhotoUrl(e.target.value);
  };

  const updateButtonClickHandler = (e) => {
    e.preventDefault();
    if (displayName === undefined || photoUrl === undefined) {
      toast.warn("All fields are mandatory");
      return;
    } else {
      dispatch(
        updateProfileaction({
          displayName: displayName,
          photoUrl: photoUrl,
        })
      );
      setTimeout(() => {
        dispatch(getUserDataAction());
      }, 800);
      navigate("/myAccount");
    }
    setDisplayName("");
    setPhotoUrl("");
  };
  return (
    <div className={classes.userProfile}>
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <FormControl fullWidth>
            <Typography variant="h6">Name</Typography>
            <TextField
              // style={textfield}
              id="outlined-textarea"
              placeholder="Enter Your Name"
              onChange={nameChangeHandler}
              value={displayName}
            />
          </FormControl>

          <FormControl fullWidth style={passStyle}>
            <Typography variant="h6">Photo URL</Typography>
            <TextField
              id="outlined-adornment-password"
              placeholder="photoUrl"
              onChange={photoUrlChangeHandler}
              value={photoUrl}
            />
          </FormControl>

          <Button
            type="submit"
            onClick={updateButtonClickHandler}
            color="primary"
            variant="contained"
            fullWidth
            style={btnStyle}
          >
            Update
          </Button>
        </Paper>
      </Grid>
    </div>
  );
};

export default UserProfile;
