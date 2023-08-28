import {PropsWithChildren, useMemo} from "react";
import {NavLink, useLocation} from "react-router-dom";
import styles from './styles.module.scss'
import {ShoppingCartOutlined} from "@ant-design/icons";
import {useTypedSelector} from "../../../hooks/use-typed-selector.ts";
import {shallowEqual} from "react-redux";
import cn from "classnames";

export const DefaultLayout = ({children}: PropsWithChildren) => {
    const cart = useTypedSelector(state => state.cart, shallowEqual)
    const cartCount = useMemo(() => cart.list.reduce((acc, item) => acc + item.count, 0), [cart])
    const { pathname } = useLocation()
    if(pathname.includes('auth')) {
        return children
    }
    return (
        <div>
            <div className={styles.header}>
                <NavLink to={'/'} className={styles.link}>
                    Home
                </NavLink>
                <NavLink to={'/cart'} className={cn(styles.cart, styles.link)} >
                    <ShoppingCartOutlined className={styles.icon}/>
                    Cart
                    <span className={styles.count}>{cartCount !== 0 && `(${cartCount})`}</span>
                </NavLink>
            </div>
            {children}
        </div>
    )
}