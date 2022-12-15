import { add, removeLeadingZeroes, multiplyByPowerOfTen } from '../utils'

const splitNumber = (num: string, at: number): [string, string] => {
    let high = num.slice(0, at)
    let low = num.slice(at, num.length)

    if (high.length < low.length) {
        high = `0${high}`
    }

    if (low.length < high.length) {
        low = `0${low}`
    }

    return [high, low]
}

const addLeadingZero = (num: string) => {
    return num.length % 2 === 0 ? num : `0${num}`
}

const processInput = (num1: string, num2: string) => {
    if (num1.length === num2.length) {
        return [num1, num2]
    }

    if (num1.length < num2.length) {
        return [
            `${'0'.repeat(num2.length - num1.length)}${num1}`,
            num2,
        ]
    } else {
        return [
            num1,
            `${'0'.repeat(num1.length - num2.length)}${num2}`,
        ]
    }
}

export const karatsuba = (_num1: string, _num2: string): string => {
    if (removeLeadingZeroes(_num1).length === 1 || removeLeadingZeroes(_num2).length === 1)
        return (Number.parseInt(_num1) * Number.parseInt(_num2)).toString() /* fall back to traditional multiplication */

    const __num1 = addLeadingZero(_num1)
    const __num2 = addLeadingZero(_num2)

    const [num1, num2] = processInput(__num1, __num2)

    /* Calculates the size of the numbers. */
    const m = Math.min(num1.length, num2.length)
    const m2 = Math.floor(m / 2)

    /* Split the digit sequences in the middle. */
    const [high1, low1] = splitNumber(num1, m2)
    const [high2, low2] = splitNumber(num2, m2)

    /* 3 recursive calls made to numbers approximately half the size. */
    const z0 = karatsuba(low1, low2)
    const z2 = karatsuba(high1, high2)
    const z3 = karatsuba(high1, low2)
    const z4 = karatsuba(low1, high2)

    const a = multiplyByPowerOfTen(z2, m)
    const b = multiplyByPowerOfTen(add(z3, z4), m2)

    return removeLeadingZeroes(add(add(a, b), z0))
}