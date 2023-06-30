import styled, { css } from 'styled-components'
import { StyledPlaceholder } from './StyledPlaceholder'

export const StyledInput = styled('input')`
    width: 100%;
    padding: 13px 15px;

    background-color: ${(p) => p.theme.colors.background};
    border: 1px solid ${(p) => p.theme.colors.inputBorder};
    border-radius: ${(p) => p.theme.radii[1]};
    outline: none;
    box-shadow: none;

    font-weight: ${(p) => p.theme.fontWeights.regular};
    font-size: ${(p) => p.theme.fontSizes[2]};
    line-height: ${(p) => p.theme.lineHeights[2]};
    color: ${(p) => p.theme.colors.black};

    ${({ error }) =>
        !!error &&
        css`
            border: 2px solid ${(p) => p.theme.colors.error};
            padding: 12px 14px;
        `}

    &:focus + ${StyledPlaceholder} {
        top: 0;
        left: 12px;
        transition: all 0.2s ease-in-out;

        padding-left: ${(p) => p.theme.space[1]};
        padding-right: ${(p) => p.theme.space[1]};

        font-size: ${(p) => p.theme.fontSizes[1]};
        line-height: ${(p) => p.theme.lineHeights[1]};

        background-color: ${(p) => p.theme.colors.background};

        ${({ error }) =>
            !!error &&
            css`
           color ${(p) => p.theme.colors.error}
        `}
    }
`
