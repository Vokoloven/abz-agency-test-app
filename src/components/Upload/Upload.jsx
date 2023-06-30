import { StyledUploadInput } from './style/StyledUploadInput'
import { StyledUploadLabel } from './style/StyledUploadLabel'
import { StyledInputValue } from './style/StyledInputValue'
import { Box } from 'components/Box'
import { handleErrorText } from './handleErrorText'
import { Typography } from 'components/Typography'

export const Upload = ({ register, error, input }) => {
    return (
        <Box mt={47}>
            <Box display={'flex'}>
                <StyledUploadInput
                    type={'file'}
                    id={'file-upload'}
                    {...register('photo')}
                />
                <StyledUploadLabel htmlFor={'file-upload'}>
                    Upload
                </StyledUploadLabel>
                <StyledInputValue>
                    {!!input?.photo ? input.photo.name : 'Upload your photo'}
                </StyledInputValue>
            </Box>
            {handleErrorText(error, Typography, Box)}
        </Box>
    )
}
