import { Typography } from 'components/Typography';
import { StyledTooltipBox } from './style/StyledTooltipBox';
import { StyledTooltipText } from './style/StyledTooltipText';
import { StyledTooltipCard } from './style/StyledTooltipCard';
import { Box } from 'components/Box';
import { sliceText } from './sliceText';
import { useWindowDimension } from 'hooks/useWindowDimension';

export const Tooltip = ({ children, sx }) => {
    const { width } = useWindowDimension();

    return (
        <Box {...sx}>
            <StyledTooltipCard>
                <StyledTooltipText>
                    <Box as={'a'} href={`mailto:${children}`} display={'block'}>
                        <Typography variant={'body'}>
                            {sliceText(children, width)}
                        </Typography>
                    </Box>
                </StyledTooltipText>
                <StyledTooltipBox>
                    <Typography variant={'body'} color={'white'}>
                        {children}
                    </Typography>
                </StyledTooltipBox>
            </StyledTooltipCard>
        </Box>
    );
};
