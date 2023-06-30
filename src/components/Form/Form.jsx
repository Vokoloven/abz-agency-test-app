import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from 'validation'
import { Box } from 'components/Box'
import { Input, InputBox } from 'components/Input'
import { Button } from 'components/Button'
import { phoneFilter } from 'components/Input'
import { RadioButton, RadioButtonBox } from 'components/RadioButton'

export const Form = () => {
    const [input, setInput] = useState({})
    const [error, setError] = useState(null)

    const { register, handleSubmit, setValue } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = (e) => {
        const replacedPhone = e?.phone?.replace(/[-]/g, ' ')
        const updatedValue = { ...e, phone: replacedPhone }

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
            [e.target.id]: e.target.value,
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
            <InputBox>
                <Input register={register} input={input} error={error} />
            </InputBox>
            <RadioButtonBox>
                <RadioButton register={register} />
            </RadioButtonBox>
            <Box
                width={'100%'}
                display={'flex'}
                justifyContent={'center'}
                mt={50}
            >
                <Button type={'submit'} variant={'primary'} disabled>
                    Sign up
                </Button>
            </Box>
        </Box>
    )
}
