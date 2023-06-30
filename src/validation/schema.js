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
    photo: yup
        .mixed()
        .required()
        .test('name', 'You should provide the file', (value) => {
            if (value?.length === 0) {
                return false
            } else {
                return true
            }
        })
        .test('size', 'The file size should be no more than 5Mb', (value) => {
            if (value?.length === 0) {
                return false
            } else {
                return value && value[0].size <= 5000000
            }
        })
        .test('type', 'Supported only jpeg or png files', (value) => {
            if (!value) {
                return
            } else if (value?.length === 0) {
                return false
            }
            return (
                (value && value[0].type === 'image/jpeg') ||
                (value && value[0].type === 'image/png')
            )
        }),
})
