import styled from 'styled-components'

export const StyledInput = styled('input')`
    width: 20px;
    height: 20px;
    position: relative;
    cursor: pointer;
    visibility: hidden;
    margin-right: ${(p) => p.theme.space[3]};

    &::before {
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: all 0.2s ease-in-out;

        width: 18px;
        height: 18px;

        border: 1px solid ${(p) => p.theme.colors.inputBorder};
        border-radius: 100%;

        background-color: ${(p) => p.theme.colors.background};
        visibility: initial;
    }

    &::after {
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0.5);
        transition: transform 0.2s ease-in-out;
    }

    &:checked::before {
        border-color: ${(p) => p.theme.colors.secondary};
    }

    &:checked::after {
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 10px;
        height: 10px;

        border-style: none;
        border-radius: 100%;

        background-color: ${(p) => p.theme.colors.secondary};
        visibility: initial;
    }
`
