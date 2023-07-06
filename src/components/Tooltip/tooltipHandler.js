import { sliceText } from './sliceText';

export const tooltipHandler = (itemName, Box, Typography, children, width) => {
    if (itemName === 'email') {
        return (
            <Box as={'a'} href={`mailto:${children}`}>
                <Typography variant={'body'}>
                    {sliceText(children, width)}
                </Typography>
            </Box>
        );
    } else {
        return (
            <Typography variant={'body'}>
                {sliceText(children, width)}
            </Typography>
        );
    }
};
