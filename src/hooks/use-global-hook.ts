import {useEffect} from "react";
import {shallowEqual, useDispatch} from "react-redux";
import {TypedDispatch} from "../types/typed-dispatch.ts";
import {useTypedSelector} from "./use-typed-selector.ts";
import {userActions} from "../store/user";

export const useGlobalHook = () => {
    const dispatch = useDispatch<TypedDispatch>()
    const user = useTypedSelector(s => s.user, shallowEqual)
    console.log(user)
    useEffect(() => {
        if(localStorage.getItem('token') && !user.id){
            dispatch(userActions.getMe())
        }
    }, [dispatch, user]);

}