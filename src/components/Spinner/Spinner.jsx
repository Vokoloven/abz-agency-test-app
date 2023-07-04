import { StyledSpinner } from './style/StyledSpinner';
import { Box } from 'components/Box';

export const Spinner = ({ loading, sx }) => {
    const handleLoadingStatus = (loading) => {
        if (loading === 'pending') {
            return (
                <Box sx={{ ...sx }}>
                    <StyledSpinner />
                </Box>
            );
        }
    };
    return handleLoadingStatus(loading);
};
