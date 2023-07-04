import styled, { css } from 'styled-components';
import { StyledTooltipText } from './StyledTooltipText';
import { StyledTooltipBox } from './StyledTooltipBox';

export const StyledTooltipCard = styled('div')`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    & ${StyledTooltipText}:hover + ${StyledTooltipBox} {
        opacity: 1;
    }

    ${({ sx }) => {
        return css`
        margin
        
        `;
    }}
`;
