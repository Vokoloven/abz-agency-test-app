import styled, { css } from 'styled-components';
import { composeUtility } from 'style';

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
            @media screen and (min-width: ${props.theme.breakpoints.laptop}) {
                max-width: ${props.theme.breakpoints.laptop};
                padding-left: 60px;
                padding-right: 60px;
            }
            @media screen and (min-width: ${props.theme.breakpoints.desktopS}) {
                max-width: ${props.theme.breakpoints.desktopS};
                padding-left: 0;
                padding-right: 0;
            }
        `;
    },

    composeUtility()
);
