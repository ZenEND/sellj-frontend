import {Field, FieldProps, useField} from "formik";
import {Input, InputProps} from "antd";
import {SyntheticEvent} from "react";
interface TextField extends InputProps {
    name: string
}
export const TextField = ({ name, ...props }: TextField) => {
    const [field] = useField<TextField>(name)
    return <Field component={UiInput} {...field} {...props} />
}

const UiInput = (props: FieldProps) => {
    const { field : { name, ...field}, form: { setFieldValue }} = props
    const handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
        setFieldValue(name, event.currentTarget.value)
    }

    return <Input name={name} {...field} onChange={handleChange} />
}