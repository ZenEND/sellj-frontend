import {useTypedSelector} from "../../hooks/use-typed-selector.ts";
import {shallowEqual} from "react-redux";
import {CartItem} from "../../components/modules/cart/cart-item/intex.tsx";
import styles from './styles.module.scss'
import {Button} from "antd";
import {Form, Formik} from "formik";
import {TextField} from "../../components/fields/formik/text-field";

interface SubmitInterface {
    name: string
    city: string
    postcode: string
    address: string
}

const initialValues = {
    name: '',
    city: '',
    postcode: '',
    address: ''
}
export const CartPage = () => {
    const cart = useTypedSelector(state => state.cart, shallowEqual)
    const onSubmit = (val: SubmitInterface) => {
        console.log('hello', val)
    }
    return (
        <div className={styles.continer}>
            <div className={styles.content}>
                {cart.list.map(item => (
                    <CartItem key={item.id} {...item} />
                ))}
            </div>
            <div className={styles.form}>
                <div>Checkout Details</div>
                <div>
                    <Formik initialValues={initialValues} onSubmit={onSubmit}>
                        <Form>
                            <TextField className={styles.field} placeholder={'Name'} name={'name'}/>
                            <TextField className={styles.field} placeholder={'City'} name={'city'}/>
                            <TextField className={styles.field} placeholder={'Postcode'} name={'postcode'}/>
                            <TextField className={styles.field} placeholder={'Address Line 1'} name={'address'}/>
                            <Button htmlType={'submit'} size={'large'}>Checkout</Button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}