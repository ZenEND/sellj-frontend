import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import * as goodsApi  from "../../api/goods.ts";

export interface GoodInterface {
    id: number
    title: string
    description: string
    image: string
    price: number
    rating: {
        count: number
        rate: number
    }
}

const getGoods = createAsyncThunk('/goods/get', goodsApi.getGoods)

const goods = createSlice({
    name: 'goods',
    initialState: [] as GoodInterface[],
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getGoods.fulfilled, (_s, { payload }) => {
            console.log(payload)
            return payload.data
        })
    },
})

export const goodsActions = {
    getGoods,
}

export default goods.reducer