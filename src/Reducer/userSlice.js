import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getUserDataAction,
  resetPasswordAction,
  signInAction,
  signUpAction,
  updateProfileaction,
} from "./asyncUserReducer";

const initialState = {
  userDetails: undefined,
  isPending: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut(state) {
      localStorage.clear();
      state.userDetails = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUpAction.fulfilled, (state, action) => {});
    builder.addCase(signInAction.fulfilled, (state, action) => {
      localStorage.setItem("idToken", action.payload.idToken);
      localStorage.setItem("isLoggedIn", true);
      state.userDetails = action.payload;
    });
    builder.addCase(updateProfileaction.fulfilled, (state, action) => {
      toast.success("Your details are updated");
      state.isPending = false;
    });
    builder.addCase(updateProfileaction.pending, (state, action) => {
      state.isPending = true;
    });
    builder.addCase(getUserDataAction.fulfilled, (state, action) => {
      state.userDetails = action.payload;
      state.isPending = false;
    });
    builder.addCase(getUserDataAction.pending, (state, action) => {
      state.isPending = true;
    });
    builder.addCase(resetPasswordAction.fulfilled, (state, action) => {});
  },
});
export default userSlice;
export const selectUserDetails = (state) => state.user.userDetails;
export const userActions = userSlice.actions;
