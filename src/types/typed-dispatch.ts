import {RootStore} from "../store/reducers.ts";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "@reduxjs/toolkit";

export type TypedDispatch = ThunkDispatch<RootStore, unknown, AnyAction>;
