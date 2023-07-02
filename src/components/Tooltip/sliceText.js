export const sliceText = (text) => {
    if (typeof text === 'string') {
        const coma = text.length > 25 ? '...' : '';

        return `${text.slice(0, 25)}${coma}`;
    }
};
