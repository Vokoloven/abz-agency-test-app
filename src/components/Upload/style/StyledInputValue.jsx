import styled from 'styled-components'

export const StyledInputValue = styled('div')`
    width: 100%;
    padding: 13px 14px;

    border: 1px solid ${(p) => p.theme.colors.inputBorder};

    border-top-right-radius: ${(p) => p.theme.space[1]};
    border-bottom-right-radius: ${(p) => p.theme.space[1]};

    font-weight: ${(p) => p.theme.fontWeights.regular};
    font-size: ${(p) => p.theme.fontSizes[2]};
    line-height: ${(p) => p.theme.lineHeights[2]};
    color: ${(p) => p.theme.colors.placeholder};
`
