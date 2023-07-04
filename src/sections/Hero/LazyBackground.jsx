import { Background } from './Background';
import { useEffect, useState } from 'react';

export const LazyBackground = ({ children, src }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const setLoad = () => setIsLoaded(true);

        const image = new Image();
        image.addEventListener('load', setLoad);
        image.src = src;

        return () => image.removeEventListener('load', setLoad);
    }, [src]);

    if (!isLoaded) {
        return null;
    }

    console.log(isLoaded);

    return <Background src={src}>{children}</Background>;
};
