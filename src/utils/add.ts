export const add = (_num1: string, _num2: string) => {
    let num1 = _num1
    let num2 = _num2

    if (num2.length < num1.length) {
        const diff = num1.length - num2.length
        num2 = `${'0'.repeat(diff)}${num2}`
    } else if (num2.length > num1.length) {
        const diff = num2.length - num1.length
        num1 = `${'0'.repeat(diff)}${num1}`
    }

    let remainder = 0

    let result = ''

    for (let i = num1.length - 1; i >= 0; i--) {
        let sum = Number.parseInt(num1[i]) + Number.parseInt(num2[i]) + remainder
        if (sum >= 10) {
            remainder = Number.parseInt(sum.toString().slice(0, sum.toString().length - 1))
            sum = Number.parseInt(sum.toString()[1])
        } else {
            remainder = 0
        }

        result = sum.toString() + result

        if (i === 0 && remainder !== 0) {
            result = remainder.toString() + result
        }
    }

    return result
}
