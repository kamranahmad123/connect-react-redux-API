import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    users : [],
    isLoading : false,
    error : ''}

const fetchData = createAsyncThunk('user/fehData', () => {
axios.get('https://randomuser.me/api/?results=5').then((Response) => {
    Response.data.map((user) => user.name)
})
})

const usersSlice = createSlice({
    name : 'users',
    initialState,
    extraReducers : (builder) => {
    builder.addCase(fetchData.pending, (state) => {
        state.isLoading = true;

    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.users = [];
        state.error = action.error.message;
    })
    }
});

export default usersSlice.reducer;