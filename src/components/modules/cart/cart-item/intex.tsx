import {CardUI} from "../../../ui/card";
import styles from './styles.module.scss'
import {Button} from "antd";
import {cartActions, CartInterface} from "../../../../store/cart";
import {useCallback} from "react";
import {useDispatch} from "react-redux";
import {TypedDispatch} from "../../../../types/typed-dispatch.ts";

interface CartItem extends CartInterface {

}
export const CartItem = (item: CartItem) => {
    const dispatch = useDispatch<TypedDispatch>()
    const { image, title, description, count } = item

    const onAdd = useCallback(() => {
        dispatch(cartActions.addToCart(item))
    }, [dispatch, item])

    const onRemove = useCallback(() => {
        dispatch(cartActions.removeItem(item))
    }, [dispatch, item])
    return (
        <CardUI title={title} className={styles.card}>
            <div className={styles.body}>
                {image && <img src={image} alt={'error'} className={styles.image}/>}
                <div className={styles.content}>
                    <div className={styles.description}>
                        <div>{description}</div>
                    </div>
                    <div className={styles.actions}>
                        <div>{count}</div>
                        <div>
                            <Button onClick={onAdd}>+</Button>
                            <Button onClick={onRemove}>-</Button>
                        </div>
                    </div>
                </div>
            </div>
        </CardUI>
    )
}