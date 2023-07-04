import { useState, useEffect } from 'react';

export const useLazyBackground = (src) => {
    const [sourceLoaded, setSourceLoaded] = useState(null);

    useEffect(() => {
        const img = new Image();
        setTimeout(() => {
            img.loading = 'lazy';
        }, 0);
        img.src = src;
        img.onload = () => setSourceLoaded(src);
    }, [src]);

    return sourceLoaded;
};
