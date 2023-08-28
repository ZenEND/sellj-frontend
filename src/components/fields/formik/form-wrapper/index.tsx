import {Form, Formik, FormikConfig} from 'formik'
import {PropsWithChildren} from "react";

interface WithClassName {
    className?: string
}
export const FormWrapper = ({ children, className, ...props }: WithClassName & PropsWithChildren<FormikConfig<any>>) => {
    return (
        <Formik {...props}>
            <Form className={className}>{children}</Form>
        </Formik>
    )
}