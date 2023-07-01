import styled from 'styled-components'

export const StyledTooltipBox = styled('div')`
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate(0, 120%);
    width: 100%;

    padding: 3px 16px;
    border-radius: 4px;
    background-color: ${(p) => p.theme.colors.black};
    opacity: 0;
    pointer-events: none;
    transition: opacity, 0.3s ease-in-out;
    word-wrap: break-word;
`
