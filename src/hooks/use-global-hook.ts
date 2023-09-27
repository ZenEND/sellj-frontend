import {useCallback, useEffect} from "react";
import {shallowEqual, useDispatch} from "react-redux";
import {TypedDispatch} from "../types/typed-dispatch.ts";
import {useTypedSelector} from "./use-typed-selector.ts";
import {userActions} from "../store/user";
import {useLocation, useNavigate} from "react-router-dom";

export const useGlobalHook = () => {
    const dispatch = useDispatch<TypedDispatch>()
    const navigate = useNavigate()
    const { pathname  } = useLocation()
    const user = useTypedSelector(s => s.user, shallowEqual)

    const initUser = useCallback(async () => {
        if(localStorage.getItem('token') && !user.id){
            await dispatch(userActions.getMe())
        } else if(!localStorage.getItem('token') && !pathname.includes('auth')) {
            navigate('/auth/sign-in')

        }
    }, [dispatch, navigate, pathname, user.id])

    useEffect(() => {
            initUser()
    }, [initUser]);

}