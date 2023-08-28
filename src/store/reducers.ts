import { combineReducers } from '@reduxjs/toolkit'

import goods from './goods'
import cart from "./cart";

export const rootReducer = combineReducers({
    goods,
    cart
})

export type RootStore = ReturnType<typeof rootReducer>