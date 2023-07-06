import { Typography } from 'components/Typography';
import { StyledTooltipBox } from './style/StyledTooltipBox';
import { StyledTooltipText } from './style/StyledTooltipText';
import { StyledTooltipCard } from './style/StyledTooltipCard';
import { Box } from 'components/Box';
import { useWindowDimension } from 'hooks/useWindowDimension';
import { tooltipHandler } from './tooltipHandler';

export const Tooltip = ({ children, sx, itemName }) => {
    const { width } = useWindowDimension();

    return (
        <Box as={'li'} {...sx}>
            <StyledTooltipCard>
                <StyledTooltipText>
                    {tooltipHandler(itemName, Box, Typography, children, width)}
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
