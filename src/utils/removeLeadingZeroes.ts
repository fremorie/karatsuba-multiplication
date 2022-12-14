export const removeLeadingZeroes = (num: string): string => {
    const res = num.replace(/^0+/, '')
    return res.length ? res : '0'
}