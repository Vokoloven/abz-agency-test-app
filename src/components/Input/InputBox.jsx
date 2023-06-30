import { Box } from 'components/Box'

export const InputBox = ({ children }) => {
    return (
        <Box display={'flex'} flexDirection={'column'}>
            {children}
        </Box>
    )
}
