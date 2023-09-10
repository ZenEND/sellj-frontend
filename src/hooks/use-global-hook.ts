import {useCallback, useEffect} from "react";
import {shallowEqual, useDispatch} from "react-redux";
import {TypedDispatch} from "../types/typed-dispatch.ts";
import {useTypedSelector} from "./use-typed-selector.ts";
import {userActions} from "../store/user";
import {useNavigate} from "react-router-dom";

export const useGlobalHook = () => {
    const dispatch = useDispatch<TypedDispatch>()
    const navigate = useNavigate()
    const user = useTypedSelector(s => s.user, shallowEqual)

    const initUser = useCallback(async () => {
        if(localStorage.getItem('token') && !user.id){
            await dispatch(userActions.getMe())
            navigate('/')
        }
    }, [dispatch, navigate, user.id])

    useEffect(() => {
            initUser()
    }, [initUser]);

}