export const sliceText = (text) => {
    if (typeof text === 'string') {
        const coma = text.length > 35 ? '...' : '';

        return `${text.slice(0, 35)}${coma}`;
    }
};
