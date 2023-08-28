import {Route, Routes} from "react-router-dom";
import {SignUpPage} from "./sign-up";
import {SignInPage} from "./sign-in";

export const AuthPages = () => {
    return (
        <Routes>
            <Route path={'/auth/sign-up'} element={<SignUpPage/>} />
            <Route path={'/auth/sign-in'} element={<SignInPage/>} />
        </Routes>
    )
}