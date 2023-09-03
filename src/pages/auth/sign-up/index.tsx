import {useCallback} from "react";
import {FormWrapper} from "../../../components/fields/formik/form-wrapper";
import {Button} from "antd";
import {Link} from "react-router-dom";
import {TextField} from "../../../components/fields/formik/text-field";
import styles from './styles.module.scss'
import * as yup from "yup";
interface SignUpValues {
    email: string
}
const initialValues: SignUpValues = {
    email: ''
}

const validationSchema = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
    repeatPassword: yup.string().oneOf([yup.ref('password')], 'Your passwords do not match.')
})

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
            <FormWrapper initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} className={styles.form}>
                <FieldComponent name={'email'} label={'Email'}/>
                <FieldComponent name={'password'} label={'Password'} />
                <FieldComponent name={'repeatPassword'} label={'Repeat password'} />
                <Button className={styles.button}  htmlType={'submit'}>Create an account</Button>
                <Link className={styles.link} to={'/auth/sign-in'}>Return back to sign in</Link>
            </FormWrapper>
        </div>
    )
}