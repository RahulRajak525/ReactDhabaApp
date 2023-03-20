import { createAsyncThunk } from "@reduxjs/toolkit";

import { ApiUserService } from "../services/apiUserServices";
import { getCartItemAction } from "./asyncCartReducer";

export const signUpAction = createAsyncThunk(
  "signUpAction",
  async (data, thunkAPI) => {
    const response = await ApiUserService.signUp(data);
    return response;
  }
);
export const signInAction = createAsyncThunk(
  "signInAction",
  async (data, thunkAPI) => {
    const response = await ApiUserService.signIn(data);
    setTimeout(() => {
      thunkAPI.dispatch(getCartItemAction(response.localId));
    }, 500);

    return response;
  }
);
export const updateProfileaction = createAsyncThunk(
  "updateProfileaction",
  async (data, thunkAPI) => {
    const response = await ApiUserService.profileUpdate(data);
    return response;
  }
);
export const getUserDataAction = createAsyncThunk(
  "getUserDataAction",
  async (thunkAPI) => {
    const response = await ApiUserService.getUserData();
    return response.users[0];
  }
);
export const resetPasswordAction = createAsyncThunk(
  "resetPasswordAction",
  async (data, thunkAPI) => {
    const response = await ApiUserService.resetPassword(data);
    return response;
  }
);
