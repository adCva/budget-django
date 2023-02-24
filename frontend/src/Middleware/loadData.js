import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createData } from "../Redux/expenditureSlice";
import axios from 'axios';

export const loadDataCall = createAsyncThunk(
    "loadDataMiddleware/loadDataCall",
    async ({dispatch}) => {
        return axios.get('http://127.0.0.1:8000/api/expenditures/')
                    .then(response => dispatch(createData({newElement: response.data})))
                    .catch(error => console.log(error))
    }
);

const dataCallSLice =createSlice({
    name: "loadAPIMiddleware",
    initialState: {
        status: null
    },

    extraReducers: {
        [loadDataCall.pending]: (state) => {
            state.status = "loading"
        },
        [loadDataCall.fulfilled]: (state) => {
            state.status = "success"
        },
        [loadDataCall.rejected]: (state) => {
            state.status = "failed"
        }
    }
})

export default dataCallSLice.reducer;