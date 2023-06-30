import styled, { css } from 'styled-components'
import { variant } from 'styled-system'
import { composeUtility } from 'style'

export const Button = styled('button')(
    variant({
        variants: {
            primary: {
                minWidth: 100,
                py: 1,
                border: 'none',
                borderRadius: 80,
                fontWeight: 'regular',
                fontSize: 2,
                lineHeight: 2,
                bg: 'primary',
                color: 'black',
            },
        },
    }),
    (props) =>
        props.disabled &&
        css`
            background-color: ${props.theme.colors.disabled};
            color: ${props.theme.colors.white};
        `,
    composeUtility()
)
