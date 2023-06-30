import { StyledInput } from './style/StyledInput'
import { StyledPlaceholder } from './style/StyledPlaceholder'
import { InputWrapper } from './style/InputWrapper'
import { Typography } from 'components/Typography'
import { Box } from 'components/Box'
import { inputs } from './inputs'

export const Input = ({ register, input, error }) => {
    return inputs.map(({ id, placeholder }) => (
        <Box
            key={id}
            width={'100%'}
            sx={{
                ':not(:last-child)': {
                    ...(!!error?.[id]
                        ? { marginBottom: '32px' }
                        : { marginBottom: '50px' }),
                },
            }}
        >
            <InputWrapper>
                <StyledInput
                    key={id}
                    id={id}
                    {...register(id)}
                    error={error?.[id]}
                    type={'text'}
                />
                <StyledPlaceholder inputValue={input[id]} error={error?.[id]}>
                    {placeholder}
                </StyledPlaceholder>
            </InputWrapper>
            {!!error?.[id] && (
                <Typography
                    as={'p'}
                    variant={'helperText'}
                    ml={16}
                    mt={1}
                    color={'error'}
                >
                    {error?.[id]?.message}
                </Typography>
            )}
        </Box>
    ))
}
