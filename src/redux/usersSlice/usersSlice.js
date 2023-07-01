import { createSlice } from '@reduxjs/toolkit'
import { getUsers } from 'redux/service'

const initialState = {
    usersList: {},
    loading: 'idle',
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, (state) => {
            state.loading = 'pending'
        })
        builder.addCase(getUsers.fulfilled, (state, { payload }) => {
            state.loading = 'succeeded'
            state.usersList = { ...payload }
        })
        builder.addCase(getUsers.rejected, (state) => {
            state.loading = 'failed'
        })
    },
})
