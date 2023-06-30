import styled from 'styled-components'
import { composeUtility } from 'style'

export const Box = styled('div')(
    ({ sx }) => {
        return { ...sx }
    },

    composeUtility()
)
