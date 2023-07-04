import { Typography } from 'components/Typography';
import { StyledTooltipBox } from './style/StyledTooltipBox';
import { StyledTooltipText } from './style/StyledTooltipText';
import { StyledTooltipCard } from './style/StyledTooltipCard';
import { Box } from 'components/Box';
import { sliceText } from './sliceText';

export const Tooltip = ({ children, sx }) => {
    return (
        <Box {...sx}>
            <StyledTooltipCard>
                <StyledTooltipText>
                    <Box
                        as={'a'}
                        href={`mailto:${children}`}
                        display={'block'}
                        sx={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <Typography variant={'body'}>
                            {sliceText(children)}
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
