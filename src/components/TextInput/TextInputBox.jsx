import { Box } from 'components/Box'

export const TextInputBox = ({ children }) => {
    return (
        <Box display={'flex'} flexDirection={'column'}>
            {children}
        </Box>
    )
}
