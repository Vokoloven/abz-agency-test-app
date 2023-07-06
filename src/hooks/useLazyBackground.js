import { useState, useEffect, useRef } from 'react';

export const useLazyBackground = (src) => {
    const [sourceLoaded, setSourceLoaded] = useState(null);
    const isFirstLoading = useRef(true);

    useEffect(() => {
        if (isFirstLoading.current === true) {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);

            const img = new Image();
            img.src = src;
            img.onload = () => setSourceLoaded(src);

            return () => {
                isFirstLoading.current = false;
            };
        }
    }, [src]);

    return sourceLoaded;
};
