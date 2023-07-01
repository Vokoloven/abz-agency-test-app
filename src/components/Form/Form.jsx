import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from 'validation'
import { Box } from 'components/Box'
import { TextInput, TextInputBox, phoneFilter } from 'components/TextInput'
import { Button } from 'components/Button'
import { RadioButton, RadioButtonBox } from 'components/RadioButton'
import { Upload } from 'components/Upload'
import { isDisabledButton } from './isDisabledButton'

export const Form = () => {
    const [input, setInput] = useState({})
    const [error, setError] = useState(null)

    const { register, handleSubmit, setValue } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = (e) => {
        // const replacedPhone = e?.phone?.replace(/[-]/g, ' ')
        // const updatedValue = { ...e, phone: replacedPhone }

        console.log(e)

        setInput({})
        setError(null)
        ;['name', 'email', 'phone'].map((item) => setValue(item, ''))
    }

    const onError = (e) => {
        console.log(e)
        setError(e)
    }

    const handleChange = (e) => {
        setInput((prevState) => ({
            ...prevState,
            ...(e.target?.id === 'file-upload'
                ? { photo: e.target?.files[0] }
                : { [e.target.id]: e.target.value }),
        }))

        if (e.target?.id === 'phone') {
            const formatPhoneNumber = phoneFilter(e.target?.value)

            setValue('phone', formatPhoneNumber)
        }
    }

    return (
        <Box
            as={'form'}
            onSubmit={handleSubmit(onSubmit, onError)}
            onChange={handleChange}
        >
            <TextInputBox>
                <TextInput register={register} input={input} error={error} />
            </TextInputBox>
            <RadioButtonBox>
                <RadioButton register={register} />
            </RadioButtonBox>
            <Upload register={register} error={error?.photo} input={input} />
            <Box
                width={'100%'}
                display={'flex'}
                justifyContent={'center'}
                mt={50}
            >
                <Button
                    type={'submit'}
                    variant={'primary'}
                    disabled={!isDisabledButton(input)}
                >
                    Sign up
                </Button>
            </Box>
        </Box>
    )
}
