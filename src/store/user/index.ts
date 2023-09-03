import { createSlice } from '@reduxjs/toolkit'

export interface User {
    id: string
    email: string
}


const user = createSlice({
    name: 'user',
    initialState: {} as User,
    reducers: {},
})

export const userActions = {
}

export default user.reducer