export const theme = {
    sizes: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '28px',
        8: '32px',
    },
    space: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '28px',
        8: '32px',
    },
    fonts: {
        nunito: `'Nunito', sans-serif`,
    },
    fontWeights: {
        regular: 400,
    },
    fontSizes: {
        1: '12px',
        2: '16px',
        3: '40px',
    },
    lineHeights: {
        1: '14px',
        2: '26px',
        3: '40px',
    },
    colors: {
        primary: '#F4E041',
        secondary: '#00BDD3',
        background: '#F8F8F8',
        disabled: '#B4B4B4',
        white: '#FFFFFF',
        black: '#000000',
        placeholder: '#7E7E7E',
        inputBorder: '#D0CFCF',
        error: '#CB3D40',
    },
    radii: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '28px',
        8: '32px',
    },
    breakpoints: (function () {
        const breakpoints = ['360px', '768px', '1024px', '1170px', '2560px'];
        breakpoints.mobile = breakpoints[0];
        breakpoints.tablet = breakpoints[1];
        breakpoints.laptop = breakpoints[2];
        breakpoints.desktopS = breakpoints[3];
        breakpoints.desktopL = breakpoints[4];

        return breakpoints;
    })(),
};
