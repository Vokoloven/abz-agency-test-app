import styled, { css } from 'styled-components'
import { composeUtility } from 'style'

export const Container = styled('div')(
    (props) => {
        return css`
            margin-left: auto;
            margin-right: auto;
            padding-left: ${props.theme.space[4]};
            padding-right: ${props.theme.space[4]};
            @media screen and (min-width: ${props.theme.breakpoints.mobile}) {
                max-width: ${props.theme.breakpoints.mobile};
            }
            @media screen and (min-width: ${props.theme.breakpoints.tablet}) {
                max-width: ${props.theme.breakpoints.tablet};
                padding-left: ${props.theme.space[8]};
                padding-right: ${props.theme.space[8]};
            }
        `
    },

    composeUtility()
)
