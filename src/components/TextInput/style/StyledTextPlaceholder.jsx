import styled, { css } from 'styled-components';

export const StyledTextPlaceholder = styled('p')`
    position: absolute;
    top: 50%;
    left: ${(p) => p.theme.space[4]};
    transform: translateY(-50%);

    font-weight: ${(p) => p.theme.fontWeights.regular};
    font-size: ${(p) => p.theme.fontSizes[2]};
    line-height: ${(p) => p.theme.lineHeights[2]};
    color: ${(p) => p.theme.colors.placeholder};

    pointer-events: none;

    transition: all 0.2s ease-in-out;

    ${({ inputValue }) =>
        !!inputValue &&
        css`
            top: 0;
            left: 12px;

            padding-left: ${(p) => p.theme.space[1]};
            padding-right: ${(p) => p.theme.space[1]};

            font-size: ${(p) => p.theme.fontSizes[1]};
            line-height: ${(p) => p.theme.lineHeights[1]};

            background-color: ${(p) => p.theme.colors.background};
        `}

    ${({ error }) =>
        !!error &&
        css`
            color: ${(p) => p.theme.colors.error};
        `}
`;
