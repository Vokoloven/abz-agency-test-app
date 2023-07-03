import { createSlice } from '@reduxjs/toolkit';
import { getUsers, postUser } from 'redux/service';

const initialState = {
    usersList: {
        users: [],
    },
    createdUser: {},
    positions: {},
    errorMessage: '',
    loading: 'idle',
    loadingPost: 'idle',
    newUser: false,
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(postUser.pending, (state) => {
            state.errorMessage = '';
            state.loadingPost = 'pending';
            state.newUser = false;
        });
        builder.addCase(postUser.fulfilled, (state, { payload }) => {
            state.newUser = true;
            state.loadingPost = 'succeeded';
            state.createdUser = { ...payload };
        });
        builder.addCase(postUser.rejected, (state, { payload }) => {
            console.log(payload);
            state.newUser = false;
            state.errorMessage = payload.message;
            state.loadingPost = 'failed';
        });
        builder.addCase(getUsers.pending, (state) => {
            state.errorMessage = '';
            state.loading = 'pending';
        });
        builder.addCase(getUsers.fulfilled, (state, { payload }) => {
            state.newUser = false;
            state.loading = 'succeeded';
            state.usersList = { ...payload?.data };
            state.positions = { ...payload?.positions };
        });
        builder.addCase(getUsers.rejected, (state, { payload }) => {
            state.errorMessage = payload.message;
            state.loading = 'failed';
        });
    },
});
