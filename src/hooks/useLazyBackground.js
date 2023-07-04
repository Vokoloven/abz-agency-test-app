import { useState, useEffect } from 'react';

export const useLazyBackground = (src) => {
    const [sourceLoaded, setSourceLoaded] = useState(null);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.loading = 'lazy';
        img.onload = () => setSourceLoaded(src);
    }, [src]);

    return sourceLoaded;
};
