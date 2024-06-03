import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const initialState = {
isLoading:false,
position:'',
company:'',
jobLocation:'',
jobTypeOptions:['full-time', 'part-time', 'remote', 'internship'],
jobType:'full-time',
statusOptions:['interview', 'declined', 'pending'],
status:'pending',
isEditing:false,
editJobId:'',
}

export const createJob = createAsyncThunk(
    'job/createJob',
    async (job, thunkAPI) => createAsyncThunk('/job', job, thunkAPI)) 

const jobSlice = createSlice({
    name:"jobs",
    initialState,
    reducers:{
        handleChangeJobState: (state, {payload:{name, value}})=>{
            state[name] = value;
        },
        clearValues: (state) =>{
            return {...initialState}
        }
    },
    extraReducers:(build) =>{
        build
        .addCase(createJob.pending, (state)=>{
            state.isLoading = true;
            
        })
        .addCase(createJob.fulfilled, (state) => {
            state.isLoading = false;
            toast.success('Job Created');
          })
        .addCase(createJob.rejected, (state, {payload})=>{
            state.isLoading = false;
            toast.error(payload);
        })
    }
})

export const { handleChangeJobState, clearValues } = jobSlice.actions
export default jobSlice.reducer;