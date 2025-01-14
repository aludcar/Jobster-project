import customFetch from "../../util/axios";
import { logoutUser } from "./userSlice";

export const registerUserThunk = async (url, data, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, data);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const loginUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const updateUserThunk = async (url ,user, thunkAPI) => {
    try {
      const resp = await customFetch.patch(url, user);
      return resp.data;
    } catch (error) {
      if (error.response.status === 401){
        thunkAPI.dispatch(logoutUser());
        return thunkAPI.rejectWithValue('Unauthorized! Login Out...')
      }
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
