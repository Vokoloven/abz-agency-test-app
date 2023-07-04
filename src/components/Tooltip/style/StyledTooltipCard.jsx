import styled, { css } from 'styled-components';
import { StyledTooltipText } from './StyledTooltipText';
import { StyledTooltipBox } from './StyledTooltipBox';

export const StyledTooltipCard = styled('li')`
    position: relative;
    display: inline-block;
    /* display: flex;
    width: 100%;
    justify-content: center;
    align-items: center; */

    & ${StyledTooltipText}:hover + ${StyledTooltipBox} {
        opacity: 1;
    }

    ${({ sx }) => {
        return css`
        margin
        
        `;
    }}
`;
