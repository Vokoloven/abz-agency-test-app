import { useEffect, useState } from 'react';

const getWindowDimension = () => {
    const { innerWidth: width, innerHeight: height } = window;

    return { width, height };
};

export const useWindowDimension = () => {
    const [dimension, setDimension] = useState(getWindowDimension());

    useEffect(() => {
        const setWindowDimension = () => setDimension(getWindowDimension());

        window.addEventListener('resize', setWindowDimension);

        return () => window.removeEventListener('resize', setWindowDimension);
    }, []);

    return dimension;
};
