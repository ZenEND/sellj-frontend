import {FormWrapper} from "../../../components/fields/formik/form-wrapper";
import {TextField} from "../../../components/fields/formik/text-field";
import React, {useCallback, useMemo, useRef, useState} from "react";
import {Button} from "antd";
import styles from './styles.module.scss'
import {Link, useNavigate} from "react-router-dom";
import * as yup from 'yup'
import {useDispatch} from "react-redux";
import {userActions} from "../../../store/user";
import {TypedDispatch} from "../../../types/typed-dispatch.ts";
import OnboardingComponent from "../../../components/onbloarding";

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

interface FieldComponent  {
    targetRef?: React.RefObject<HTMLDivElement>
    name?: string
    label?: string
    className?: string
}

const FieldComponent = ({name = '', label = '', className = styles.field, targetRef}: FieldComponent) => {
    console.log(targetRef, name)
  return (
      <div className={className} ref={targetRef}>
          <label>{label}</label>
          <TextField name={name} />
      </div>
  )
}
export const SignInPage = () => {
    const dispatch = useDispatch<TypedDispatch>()
    const [isOnboardingOpen, setIsOnboardingOpen] = useState(true)
    const buttonRef = useRef(null)
    const inputRef = useRef(null)
    const finishRef = useRef(null)
    const navigate = useNavigate()
    const steps = useMemo(() => {
        return [
                {
                    targetRef: buttonRef,
                    content: <div>Step 1</div>
                },
                {
                    targetRef: inputRef,
                    content: <div>Step 2</div>
                },
                {
                    targetRef: finishRef,
                    content: <div>Step 3</div>
                },
            ]
    }, [])
    const onSubmit = useCallback(async (values: SignInValues) => {
        await dispatch(userActions.signIn(values))
        navigate('/')
    }, [dispatch, navigate])

    const onFinish = useCallback(() => {
        setIsOnboardingOpen(false)
    }, [])
    return (
        <div id={'page'}>
            <FormWrapper initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} className={styles.form}>
                <FieldComponent name={'email'} label={'Email'}/>
                <FieldComponent name={'password'} label={'Password'} />
                <Button className={styles.button}  ref={buttonRef} htmlType={'submit'}>Example button</Button>
                <Button className={styles.button}  ref={finishRef} htmlType={'submit'}>Submit</Button>
                <FieldComponent className={styles.button} name={'example'} label={'Example Field'} targetRef={inputRef} />
                <Link className={styles.link} to={'/auth/sign-up'}>Don't have an account? Sign Up!</Link>
            </FormWrapper>
            {isOnboardingOpen && <OnboardingComponent steps={steps} onFinish={onFinish} />}
        </div>
    )
}