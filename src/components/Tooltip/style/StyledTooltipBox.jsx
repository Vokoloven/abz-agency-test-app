import styled from 'styled-components';

export const StyledTooltipBox = styled('div')`
    display: inline-block;
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, 150%);

    @media screen and (min-width: ${(p) => p.theme.breakpoints.mobile}) {
        max-width: 328px;
    }

    @media screen and (min-width: ${(p) => p.theme.breakpoints.tablet}) {
        max-width: 344px;
    }

    @media screen and (min-width: ${(p) => p.theme.breakpoints.laptop}) {
        max-width: auto;
    }

    padding: 3px 16px;
    border-radius: 4px;
    background-color: ${(p) => p.theme.colors.black};
    opacity: 0;
    pointer-events: none;
    transition: opacity, 0.3s ease-in-out;

    z-index: 1;
    word-wrap: break-word;
`;
