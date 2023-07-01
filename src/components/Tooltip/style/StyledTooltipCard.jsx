import styled from 'styled-components'
import { StyledTooltipText } from './StyledTooltipText'
import { StyledTooltipBox } from './StyledTooltipBox'

export const StyledTooltipCard = styled('li')`
    position: relative;

    & ${StyledTooltipText}:hover + ${StyledTooltipBox} {
        opacity: 1;
    }
`
