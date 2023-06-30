export const phoneFilter = (input) => {
    let length = 0

    const phoneNumberLength = input?.length

    if (length <= phoneNumberLength) {
        const phoneNumber = input
            ?.replace(/\D/g, '')
            .match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/)

        const formatPhoneNumber =
            (phoneNumber[1] ? '+' : '') +
            (phoneNumber[1] ? phoneNumber[1] : '') +
            (phoneNumber[2] ? ' (' : '') +
            phoneNumber[2] +
            (phoneNumber[3] ? ') ' : '') +
            phoneNumber[3] +
            (phoneNumber[4] ? '-' + phoneNumber[4] : '') +
            (phoneNumber[5] ? '-' + phoneNumber[5] : '')

        length = phoneNumberLength

        return formatPhoneNumber
    }
}
