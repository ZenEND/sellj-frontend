import { TypedUseSelectorHook, useSelector } from 'react-redux'
import {RootStore} from "../store/reducers.ts";

export const useTypedSelector: TypedUseSelectorHook<RootStore> = useSelector