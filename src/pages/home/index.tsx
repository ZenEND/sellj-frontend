import styles from './styles.module.scss'
import {Button, Col, Row} from "antd";
import {useCallback, useEffect} from "react";
import {CardUI} from "../../components/ui/card";
import {shallowEqual, useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/use-typed-selector.ts";
import {GoodInterface, goodsActions} from "../../store/goods";
import {cartActions} from "../../store/cart";
import {TypedDispatch} from "../../types/typed-dispatch.ts";

export const HomePage = () => {
    const goods = useTypedSelector(state => state.goods, shallowEqual)
    const dispatch = useDispatch<TypedDispatch>()

    const loadGoods = useCallback( () => {
        dispatch(goodsActions.getGoods())
    }, [dispatch])

    useEffect(() => {
        loadGoods()
    }, [loadGoods])

    const handleAddToCart = useCallback((item: GoodInterface) => {
        dispatch(cartActions.addToCart(item))
    }, [dispatch])

    return (
        <div className={styles.content}>
            <Row>
                {goods.map(item => (
                    <Col lg={6} md={12} xs={24} key={item.id} className={styles.col}>
                        <CardUI title={item.title} className={styles.card} actions={[<Button className={styles.save} onClick={() => handleAddToCart(item)}>Add to cart {item.price}$</Button>]}>
                            <div className={styles.description}>{item.description}</div>
                        </CardUI>
                    </Col>
                ))}
            </Row>
        </div>
    )
}