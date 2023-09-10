import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import * as authApi  from "../../api/auth.ts";
import * as usersApi  from "../../api/users.ts";

export interface User {
    id: string
    email: string
}

const signInAction = createAsyncThunk('user/sign-in', authApi.singIn)
const getMe = createAsyncThunk('user/me', usersApi.getMe)

const user = createSlice({
    name: 'user',
    initialState: {} as User,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(signInAction.fulfilled, (_s, a) => {
                localStorage.setItem('token', a.payload.data)
                return a.payload.data
            })
            .addCase(getMe.fulfilled, (_s, a) => {
                return a.payload.data
            })
    }
})

export const userActions = {
    signInAction,
    getMe
}

export default user.reducer