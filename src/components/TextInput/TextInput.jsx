import { StyledTextInput } from './style/StyledTextInput'
import { StyledTextPlaceholder } from './style/StyledTextPlaceholder'
import { TextInputWrapper } from './style/TextInputWrapper'
import { Typography } from 'components/Typography'
import { Box } from 'components/Box'
import { inputs } from './inputs'
import { handleErrorText } from './handleErrorText'

export const TextInput = ({ register, input, error }) => {
    return inputs.map(({ id, placeholder }) => (
        <Box
            key={id}
            width={'100%'}
            sx={{
                ':not(:last-child)': {
                    marginBottom: '32px',
                },
            }}
        >
            <TextInputWrapper>
                <StyledTextInput
                    key={id}
                    id={id}
                    {...register(id)}
                    error={error?.[id]}
                    type={'text'}
                />
                <StyledTextPlaceholder
                    inputValue={input[id]}
                    error={error?.[id]}
                >
                    {placeholder}
                </StyledTextPlaceholder>
            </TextInputWrapper>
            {handleErrorText(error, id, Typography, Box)}
        </Box>
    ))
}
