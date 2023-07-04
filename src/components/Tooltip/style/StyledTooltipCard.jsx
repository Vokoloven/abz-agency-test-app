import styled, { css } from 'styled-components';
import { StyledTooltipText } from './StyledTooltipText';
import { StyledTooltipBox } from './StyledTooltipBox';

export const StyledTooltipCard = styled('li')`
    position: relative;
    display: inline-block;

    & ${StyledTooltipText}:hover + ${StyledTooltipBox} {
        opacity: 1;
    }

    ${({ sx }) => {
        return css`
        margin
        
        `;
    }}
`;
