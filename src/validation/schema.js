import * as yup from 'yup'
import { regExp } from './regExp'

export const schema = yup.object().shape({
    name: yup
        .string()
        .matches(regExp.name, 'Fill correct name')
        .min(2)
        .max(16)
        .defined()
        .required(),
    email: yup
        .string()
        .matches(regExp.email, 'Fill valid email')
        .defined()
        .required(),
    phone: yup
        .string()
        .matches(
            regExp.phone,
            'Fill phone in correct format +38 (XXX) XXX - XX - XX'
        )
        .defined()
        .required(),
    radio: yup
        .mixed()
        .oneOf(['Frontend developer', 'Backend developer', 'Designer', 'QA'])
        .defined()
        .required(),
})
