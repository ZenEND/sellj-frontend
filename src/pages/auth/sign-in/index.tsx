import {FormWrapper} from "../../../components/fields/formik/form-wrapper";
import {TextField} from "../../../components/fields/formik/text-field";
import {useCallback} from "react";
import {Button} from "antd";
import styles from './styles.module.scss'
import {Link, useNavigate} from "react-router-dom";
import * as yup from 'yup'
import {useDispatch} from "react-redux";
import {userActions} from "../../../store/user";
import {TypedDispatch} from "../../../types/typed-dispatch.ts";
interface SignInValues {
    email: string
    password: string
}
const initialValues: SignInValues = {
    email: '',
    password: ''
}

const validationSchema = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
})

const FieldComponent = ({name = '', label = '', className = styles.field}) => {
  return (
      <div className={className}>
          <label>{label}</label>
          <TextField name={name} />
      </div>
  )
}
export const SignInPage = () => {
    const dispatch = useDispatch<TypedDispatch>()
    const navigate = useNavigate()

    const onSubmit = useCallback(async (values: SignInValues) => {
        await dispatch(userActions.signIn(values))
        navigate('/')
    }, [dispatch, navigate])

    return (
        <div>
            <FormWrapper initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} className={styles.form}>
                <FieldComponent name={'email'} label={'Email'}/>
                <FieldComponent name={'password'} label={'Password'} />
                <Button className={styles.button}  htmlType={'submit'}>Submit</Button>
                <Link className={styles.link} to={'/auth/sign-up'}>Don't have an account? Sign Up!</Link>
            </FormWrapper>
        </div>
    )
}