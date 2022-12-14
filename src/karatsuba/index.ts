import { add, subtract, multiplyByPowerOfTen } from "../utils";

export const karatsuba = (num1: string, num2: string): string => {
    if (num1.length === 1 || num2.length === 1)
        return (Number.parseInt(num1) * Number.parseInt(num2)).toString() /* fall back to traditional multiplication */

    /* Calculates the size of the numbers. */
    const m = Math.min(num1.length, num2.length)
    const m2 = Math.floor(m / 2)

    /* Split the digit sequences in the middle. */
    const high1 = num1.slice(0, m2)
    const low1 = num1.slice(m2, num1.length)

    const high2 = num2.slice(0, m2)
    const low2 = num2.slice(m2, num2.length)

    /* 3 recursive calls made to numbers approximately half the size. */
    const z0 = karatsuba(low1, low2)
    const z1 = karatsuba(add(low1, high1), add(low2, high2))
    const z2 = karatsuba(high1, high2)

    const a = multiplyByPowerOfTen(z2, m2 * 2)
    const b = multiplyByPowerOfTen(subtract(subtract(z1, z2), z0), m2)

    return add(add(a, b), z0)
}