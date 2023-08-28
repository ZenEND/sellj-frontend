import {useCallback} from "react";
import {FormWrapper} from "../../../components/fields/formik/form-wrapper";
import {Button} from "antd";
import {Link} from "react-router-dom";
import {TextField} from "../../../components/fields/formik/text-field";
import styles from './styles.module.scss'
interface SignUpValues {
    email: string
}
const initialValues: SignUpValues = {
    email: ''
}

const FieldComponent = ({name = '', label = '', className = styles.field}) => {
    return (
        <div className={className}>
            <label>{label}</label>
            <TextField name={name} />
        </div>
    )
}
export const SignUpPage = () => {
    const onSubmit = useCallback((values: SignUpValues) => {
        console.log(values)
    }, [])

    return (
        <div>
            <FormWrapper initialValues={initialValues} onSubmit={onSubmit} className={styles.form}>
                <FieldComponent name={'email'} label={'Email'}/>
                <FieldComponent name={'password'} label={'Password'} />
                <FieldComponent name={'repeatPassword'} label={'Repeat password'} />
                <Button className={styles.button}  htmlType={'submit'}>Create an account</Button>
                <Link className={styles.link} to={'/auth/sign-in'}>Return back to sign in</Link>
            </FormWrapper>
        </div>
    )
}