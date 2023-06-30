export const isDisabledButton = (input) => {
    if (input) {
        const inputKeys = Object.keys(input)

        const isDisabled = inputKeys.reduce((acc, item) => {
            item === 'position' ? (acc = acc + 0) : acc++

            return acc
        }, 1)

        return isDisabled === 5 ? false : true
    }
}
