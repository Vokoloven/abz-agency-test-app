import { Box } from 'components/Box'
import { Typography } from 'components/Typography'

export const RadioButtonBox = ({ children }) => {
    return (
        <Box display={'flex'} flexDirection={'column'} mt={43}>
            <Typography variant={'body'} mb={11}>
                Select your position
            </Typography>
            <Box display={'flex'} flexDirection={'column'}>
                {children}
            </Box>
        </Box>
    )
}
