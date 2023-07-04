const sliceTextByWidth = (width) => {
    if (width >= 360 && width < 768) {
        return 32;
    } else if (width >= 768 && width < 1024) {
        return 38;
    } else if (width >= 1024 && width < 1170) {
        return 27;
    } else {
        return 42;
    }
};

export const sliceText = (text, width) => {
    if (typeof text === 'string') {
        const coma = text.length > sliceTextByWidth(width) ? '...' : '';

        return `${text.slice(0, sliceTextByWidth(width))}${coma}`;
    }
};
