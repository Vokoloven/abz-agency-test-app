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
                <StyledUploadLabel htmlFor={'file-upload'} error={error}>
                    Upload
                </StyledUploadLabel>
                <StyledInputValue error={error}>
                    <Typography
                        variant={'body'}
                        color={'placeholder'}
                        sx={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        {!!input?.photo
                            ? input.photo.name
                            : 'Upload your photo'}
                    </Typography>
                </StyledInputValue>
            </Box>
            {handleErrorText(error, Typography, Box)}
        </Box>
    )
}
