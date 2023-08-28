import {useTypedSelector} from "../../hooks/use-typed-selector.ts";
import {shallowEqual} from "react-redux";
import {CartItem} from "../../components/modules/cart/cart-item/intex.tsx";
import styles from './styles.module.scss'
import {Button} from "antd";
import {Form, Formik} from "formik";
import {TextField} from "../../components/fields/formik/text-field";

interface SubmitInterface {
    name: string
}
export const CartPage = () => {
    const cart = useTypedSelector(state => state.cart, shallowEqual)
    const onSubmit = (val: SubmitInterface) => {
        console.log('hello', val)
    }
    return (
        <div>
            <div className={styles.content}>
                {cart.list.map(item => (
                    <CartItem key={item.id} {...item} />
                ))}
            </div>
            <div>
                <div>Checkout Details</div>
                <div className={styles.form}>
                    <Formik initialValues={{name: '1'}} onSubmit={onSubmit}>
                        <Form>
                            <TextField name={'name'}/>
                            <Button htmlType={'submit'} size={'large'}>Checkout</Button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}