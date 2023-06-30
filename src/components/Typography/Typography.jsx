import styled from 'styled-components'
import { variant } from 'styled-system'
import { composeUtility } from 'style'

export const Typography = styled('div')(
    variant({
        variants: {
            heading: {
                fontWeight: 'regular',
                fontSize: 3,
                lineHeight: 3,
            },
            body: {
                fontWeight: 'regular',
                fontSize: 2,
                lineHeight: 2,
            },
            helperText: {
                fontWeight: 'regular',
                fontSize: 1,
                lineHeight: 1,
            },
        },
    }),
    composeUtility()
)
