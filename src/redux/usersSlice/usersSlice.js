import { createSlice } from '@reduxjs/toolkit'
import { getUsers } from 'redux/service'

const initialState = {
    usersList: {},
    positions: {},
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
            state.usersList = { ...payload.data }
            state.positions = { ...payload.positions }
        })
        builder.addCase(getUsers.rejected, (state) => {
            state.loading = 'failed'
        })
    },
})
