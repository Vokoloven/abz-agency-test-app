import { Box } from 'components/Box'
import { Typography } from 'components/Typography'
import { useState } from 'react'
import { StyledRadioInput } from './style/StyledRadioInput'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { selectUsers } from 'redux/selectors'

export const RadioButton = ({ register }) => {
    const [select, setSelect] = useState(1)
    const {
        positions: { positions },
    } = useSelector(selectUsers)

    const handleSelectChange = (value) => setSelect(value)

    return positions?.map(({ id, name }) => (
        <Box
            key={id}
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
                value={id}
                id={id}
                checked={select === id}
                onClick={handleSelectChange.bind(null, id)}
                {...register('radio')}
            />
            <Typography variant={'body'}>{name}</Typography>
        </Box>
    ))
}
