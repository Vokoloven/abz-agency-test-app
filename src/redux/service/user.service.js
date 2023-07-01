import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosConfig } from 'redux/axios/axiosConfig'

export const getUsers = createAsyncThunk(
    'users/getUsers',
    async (params, thunkAPI) => {
        try {
            const token = await axiosConfig.get('/token/')
            axiosConfig.defaults.headers.common.Authorization = `Bearer ${token.data.token}`

            const getPositions = await axiosConfig.get('/positions/')
            const positions = getPositions.data

            const response = await axiosConfig.get('/users/', {
                ...params,
            })

            const { data } = response
            return { data, positions }
        } catch (error) {
            thunkAPI.rejectWithValue(error.message)
        }
    }
)
