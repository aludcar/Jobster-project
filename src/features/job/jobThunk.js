import customFetch from "../../util/axios";
import { logoutUser } from "../user/userSlice";
import { clearValues } from "./jobSlice";

export const createJobThunk = async (url, job, thunkAPI) =>{
    try {
        const resp = await customFetch.post(url, job);
        debugger;
        thunkAPI.dispatch(clearValues());
        return resp.data;
    } catch (error) {
        if (error.response.status === 401){
            thunkAPI.dispatch(logoutUser());
            return thunkAPI.rejectWithValue('Unauthorized! Login Out...')
          }
          return thunkAPI.rejectWithValue(error.response.data.msg);
        
    }
} 