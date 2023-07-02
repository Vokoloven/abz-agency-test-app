export const inputCopy = (e) => {
    const inputCopy = { ...e }
    inputCopy.phone = inputCopy?.phone?.replace(/[-()\s]/g, '')
    inputCopy.position_id = e.radio
    delete inputCopy.radio

    let formData = new FormData()

    Object.keys(inputCopy).map((item) =>
        item !== 'photo'
            ? formData.append(item, inputCopy[item])
            : formData.append(item, inputCopy[item][0])
    )

    return formData
}
