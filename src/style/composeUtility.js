import {
    compose,
    space,
    color,
    typography,
    layout,
    flexbox,
    grid,
    background,
    border,
    position,
    shadow,
} from 'styled-system'

export const composeUtility = () =>
    compose(
        space,
        color,
        typography,
        layout,
        flexbox,
        grid,
        background,
        border,
        position,
        shadow
    )
