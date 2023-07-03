import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosConfig } from 'redux/axios/axiosConfig';

export const getUsers = createAsyncThunk(
    'users/getUsers',
    async (params, thunkAPI) => {
        try {
            const getPositions = await axiosConfig.get('/positions/');
            const positions = getPositions.data;

            const response = await axiosConfig.get('/users/', {
                ...params,
            });

            const { data } = response;

            if (data && positions) {
                return { data, positions };
            }
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const postUser = createAsyncThunk(
    'users/postUser',
    async (params, thunkAPI) => {
        try {
            const {
                data: { token },
            } = await axiosConfig.get('/token/');
            axiosConfig.defaults.headers.common.Authorization = `Bearer ${token}`;

            const response = await axiosConfig.post('/users/', params, {
                headers: {
                    Token: token,
                },
            });

            const { data } = response;

            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);
