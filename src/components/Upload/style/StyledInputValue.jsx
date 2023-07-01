import styled, { css } from 'styled-components'

export const StyledInputValue = styled('div')`
    width: 100%;
    padding: 13px 14px;

    border-top-width: 1px;
    border-left-width: 0px;
    border-bottom-width: 1px;
    border-right-width: 1px;
    border-color: ${(p) => p.theme.colors.inputBorder};
    border-style: solid;

    border-top-right-radius: ${(p) => p.theme.space[1]};
    border-bottom-right-radius: ${(p) => p.theme.space[1]};

    font-weight: ${(p) => p.theme.fontWeights.regular};
    font-size: ${(p) => p.theme.fontSizes[2]};
    line-height: ${(p) => p.theme.lineHeights[2]};
    color: ${(p) => p.theme.colors.placeholder};

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    ${({ error }) => {
        if (error) {
            return css`
                border-top-width: 2px;
                border-left-width: 0px;
                border-bottom-width: 2px;
                border-right-width: 2px;
                border-color: ${(p) => p.theme.colors.error};
                padding: 12px 13px;
            `
        }
    }}
`
