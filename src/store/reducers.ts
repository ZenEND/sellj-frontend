import { combineReducers } from '@reduxjs/toolkit'

import goods from './goods'
import cart from "./cart";
import user from "./user";

export const rootReducer = combineReducers({
    goods,
    cart,
    user
})

export type RootStore = ReturnType<typeof rootReducer>