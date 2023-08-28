import {createAction, createSlice} from '@reduxjs/toolkit'
import {GoodInterface} from "../goods";

export interface CartInterface extends GoodInterface {
    count: number
}

interface CartStoreInterface {
    list: CartInterface[]
}

const addToCart = createAction<GoodInterface>('/cart/add')
const removeItem = createAction<GoodInterface>('/cart/remove')

const cart = createSlice({
    name: 'cart',
    initialState: {
        list: []
    } as CartStoreInterface,
    reducers: {},
    extraReducers: builder => {builder
        .addCase(addToCart, (state, { payload }) => {
            const index = state.list.findIndex(({id}) => id === payload.id)
            if(index !== -1) {
                state.list[index].count++
                return state
            } else {
                return {list: [...state.list, {...payload, count: 1}]}
            }
        })
        .addCase(removeItem, (state, {payload}) => {
            const index = state.list.findIndex(({id}) => id === payload.id)
            if(index === -1){
                return state
            } else {
                state.list[index].count--
                if(state.list[index].count === 0) {
                    state.list = state.list.filter(item => item.id !== payload.id)
                } else {
                    return state
                }
            }
        })
    },
})

export const cartActions = {
    addToCart,
    removeItem
}

export default cart.reducer