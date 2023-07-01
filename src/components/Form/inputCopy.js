export const inputCopy = (e) => {
    const inputCopy = { ...e }
    inputCopy.phone = inputCopy?.phone?.replace(/[-()\s]/g, '')
    inputCopy.position_id = e.radio
    delete inputCopy.radio

    return inputCopy
}
