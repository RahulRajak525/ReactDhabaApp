import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserDetails } from "../../Reducer/userSlice";
import classes from "./MyAccount.module.css";
import { useNavigate } from "react-router-dom";
import { getUserDataAction } from "../../Reducer/asyncUserReducer";
import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const MyAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userDetail = useSelector(selectUserDetails);
  const isPending = useSelector((state) => state.user.isPending);

  const goToUpdateProfile = () => {
    navigate("/userProfile");
  };

  useEffect(() => {
    dispatch(getUserDataAction());
  }, [dispatch]);

  return (
    <div>
      {isPending ? (
        <div className={classes.container}>
          <Box>
            <CircularProgress color="secondary" />
          </Box>
        </div>
      ) : (
        userDetail && (
          <div className={classes.container}>
            {userDetail.photoUrl && (
              <img src={userDetail.photoUrl} alt="Profile Picture" />
            )}
            <h1>{userDetail.displayName}</h1>
            <h2>Web Developer</h2>
            <p className={classes.email}>{userDetail.email}</p>
            <button onClick={goToUpdateProfile}>Update Profile</button>
          </div>
        )
      )}
    </div>
  );
};

export default MyAccount;
