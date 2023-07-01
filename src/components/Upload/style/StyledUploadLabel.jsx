import styled, { css } from 'styled-components'

export const StyledUploadLabel = styled('label')`
    padding: 13px 14px;

    display: inline-block;
    border: 1px solid ${(p) => p.theme.colors.black};

    border-top-left-radius: ${(p) => p.theme.space[1]};
    border-bottom-left-radius: ${(p) => p.theme.space[1]};

    font-weight: ${(p) => p.theme.fontWeights.regular};
    font-size: ${(p) => p.theme.fontSizes[2]};
    line-height: ${(p) => p.theme.lineHeights[2]};
    color: ${(p) => p.theme.colors.black};

    cursor: pointer;

    ${({ error }) => {
        if (error) {
            return css`
                border-top-width: 2px;
                border-left-width: 2px;
                border-bottom-width: 2px;
                border-right-width: 2px;
                border-color: ${(p) => p.theme.colors.error};
                padding: 12px 13px;
            `
        }
    }}
`
