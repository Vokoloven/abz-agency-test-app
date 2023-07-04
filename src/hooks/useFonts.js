import { useEffect } from 'react';

export const useFonts = () => {
    useEffect(() => {
        const googleapis = document.createElement('link');
        const stylesheet = document.createElement('link');
        const gstatic = document.createElement('link');
        stylesheet.rel = 'stylesheet';
        stylesheet.href =
            'https://fonts.googleapis.com/css2?family=Nunito&display=swap';
        googleapis.rel = 'preconnect';
        googleapis.href = 'https://fonts.googleapis.com';
        gstatic.crossOrigin = true;
        gstatic.rel = 'preconnect';
        gstatic.href = 'https://fonts.gstatic.com';
        const items = [googleapis, gstatic, stylesheet];
        items.map((item) => document.head.appendChild(item));
    }, []);
};
