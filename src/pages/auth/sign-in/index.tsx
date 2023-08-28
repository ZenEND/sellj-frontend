import {FormWrapper} from "../../../components/fields/formik/form-wrapper";
import {TextField} from "../../../components/fields/formik/text-field";
import {useCallback} from "react";
import {Button} from "antd";
import styles from './styles.module.scss'
import {Link} from "react-router-dom";
interface SignInValues {
    email: string
}
const initialValues: SignInValues = {
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
export const SignInPage = () => {

    const onSubmit = useCallback((values: SignInValues) => {
        console.log(values)
    }, [])

    return (
        <div>
            <FormWrapper initialValues={initialValues} onSubmit={onSubmit} className={styles.form}>
                <FieldComponent name={'email'} label={'Email'}/>
                <FieldComponent name={'password'} label={'Password'} />
                <Button className={styles.button}  htmlType={'submit'}>Submit</Button>
                <Link className={styles.link} to={'/auth/sign-up'}>Don't have an account? Sign Up!</Link>
            </FormWrapper>
        </div>
    )
}