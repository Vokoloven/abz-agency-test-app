import { Box } from 'components/Box'
import { Typography } from 'components/Typography'
import { useState } from 'react'
import { radioButtons } from './radioButtons'
import { StyledRadioInput } from './style/StyledRadioInput'

export const RadioButton = ({ register }) => {
    const [select, setSelect] = useState('Frontend developer')

    const handleSelectChange = (value) => setSelect(value)

    return radioButtons.map((item) => (
        <Box
            key={item?.value}
            display={'flex'}
            alignItems={'center'}
            sx={{
                ':not(:last-child)': {
                    marginBottom: '7px',
                },
            }}
        >
            <StyledRadioInput
                type={'radio'}
                value={item?.value}
                id={item?.id}
                checked={select === item?.value}
                onClick={handleSelectChange.bind(null, item?.value)}
                {...register('radio')}
            />
            <Typography variant={'body'}>{item?.value}</Typography>
        </Box>
    ))
}
