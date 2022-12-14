export const subtract = (_num1: string, _num2: string) => {
    let num1 = _num1
    let num2 = _num2

    if (num2.length < num1.length) {
        const diff = num1.length - num2.length
        num2 = `${'0'.repeat(diff)}${num2}`
    } else if (num2.length > num1.length) {
        const diff = num2.length - num1.length
        num1 = `${'0'.repeat(diff)}${num1}`
    }

    let result = ''

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

    return result
}
