import styled, { keyframes } from 'styled-components'

const spinnerAnimation = keyframes`
100% {
    transform: rotate(360deg);
}
`

const SpinnerBody = styled('div')`
    border-width: 4px;
    border-style: solid;
    border-color: ${(p) => p.theme.colors.secondary}
        ${(p) => p.theme.colors.secondary} ${(p) => p.theme.colors.secondary}
        transparent;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    animation: ${spinnerAnimation} 1.5s infinite;
    position: relative;

    &::before,
    &::after {
        content: '';
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: ${(p) => p.theme.colors.secondary};
        position: absolute;
        left: 2px;
    }

    &::before {
        top: 3px;
        transform: translate(5%, -10%);
    }

    &::after {
        transform: translate(4%, 5%);
        bottom: 3px;
    }
`

export const StyledSpinner = () => {
    return <SpinnerBody />
}
