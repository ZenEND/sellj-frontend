import {Route, Routes} from 'react-router-dom'
import {HomePage} from "./home";
import {CartPage} from "./cart";
import {DefaultLayout} from "../components/layouts/default-layout";
import {AuthPages} from "./auth";
import {useGlobalHook} from "../hooks/use-global-hook.ts";


export const Pages = () => {
    useGlobalHook()
    return (
        <DefaultLayout>
                <Routes>
                    <Route element={<HomePage />} path={"/"}/>
                    <Route element={<CartPage />} path={"/cart"}/>
                    <Route element={<AuthPages />} path={"*"}/>
                </Routes>
        </DefaultLayout>
    )
}

