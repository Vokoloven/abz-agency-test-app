import styled from 'styled-components';
import image from 'assets/pexels-alexandr-podvalny-1227513.jpeg';

export const Background = styled('div')`
    width: 100%;
    height: 500px;

    @media screen and (min-width: ${(p) => p.theme.breakpoints.laptop}) {
        height: 650px;
    }

    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url(${image});
    background-repeat: no-repeat;
    background-size: auto 150%;
    background-position: bottom;
`;
