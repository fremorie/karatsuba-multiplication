import { isNegative } from './isNegative'
import { add } from './add'

export const subtract = (_num1: string, _num2: string): string => {
    let num1 = _num1
    let num2 = _num2

    if (isNegative(num1) && !isNegative(num2)) {
        num1 = num1.slice(1, num1.length)
        return `-${add(num2, num1)}`
    }

    if (!isNegative(num1) && isNegative(num2)) {
        num2 = num2.slice(1, num2.length)
        return add(num1, num2)
    }

    if (isNegative(num1) && isNegative(num2)) {
        num1 = num1.slice(1, num1.length)
        num2 = num2.slice(1, num2.length)
        return subtract(num2, num1)
    }

    let result = ''

    const isResultNegative = Number.parseInt(_num1) < Number.parseInt(_num2)

    if (isResultNegative) {
        num1 = _num2
        num2 = _num1
    }

    if (num2.length < num1.length) {
        const diff = num1.length - num2.length
        num2 = `${'0'.repeat(diff)}${num2}`
    } else if (num2.length > num1.length) {
        const diff = num2.length - num1.length
        num1 = `${'0'.repeat(diff)}${num1}`
    }

    for (let i = num1.length - 1; i >= 0; i--) {
        let n1 = Number.parseInt(num1[i])
        let n2 = Number.parseInt(num2[i])

        if (n2 > n1) {
            const num1Chars = [...num1]
            num1Chars[i-1] = (Number.parseInt(num1[i - 1]) - 1).toString()
            num1 = num1Chars.join('')
            n1 = n1 + 10
        }

        const res = n1 - n2
        result = res.toString() + result
    }

    return isResultNegative ? `-${result}` : result
}
