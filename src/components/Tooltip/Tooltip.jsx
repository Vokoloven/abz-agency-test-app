import { Typography } from 'components/Typography'
import { StyledTooltipBox } from './style/StyledTooltipBox'
import { StyledTooltipText } from './style/StyledTooltipText'
import { StyledTooltipCard } from './style/StyledTooltipCard'
import { Box } from 'components/Box'

export const Tooltip = ({ children }) => {
    return (
        <StyledTooltipCard>
            <StyledTooltipText>
                <Typography
                    as={'p'}
                    variant={'body'}
                    maxWidth={'288px'}
                    sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }}
                >
                    <Box as={'a'} href={`mailto:${children}`}>
                        {children}
                    </Box>
                </Typography>
            </StyledTooltipText>
            <StyledTooltipBox>
                <Typography variant={'body'} color={'white'}>
                    {children}
                </Typography>
            </StyledTooltipBox>
        </StyledTooltipCard>
    )
}
