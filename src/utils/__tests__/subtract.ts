import { subtract } from '../subtract'

describe('subtract', () => {
    it('should subtract two numbers without overflow', () => {
        expect(subtract('123', '456')).toEqual('-333')
    })

    it('should subtract two numbers with overflow', () => {
        expect(subtract('126', '456')).toEqual('-330')
    })

    it('should subtract two numbers of different length', () => {
        expect(subtract('123123123', '999')).toEqual('123122124')
    })

    it('should produce negative numbers', () => {
        expect(subtract('999', '123123123')).toEqual('-123122124')
    })

    it('should work on big integers: negative case', () => {
        const x = '12312312312312312312312313123123131232131231231312312312312313'
        const y = '99999988888837373737373737373737373722229999988765765764651111111'

        expect(subtract(x, y)).toEqual('-99987676576525061425061425060614250590997868757534453452338798798')
    })

    it('should work on big integers: positive case', () => {
        const y = '12312312312312312312312313123123131232131231231312312312312313'
        const x = '99999988888837373737373737373737373722229999988765765764651111111'

        expect(subtract(x, y)).toEqual('99987676576525061425061425060614250590997868757534453452338798798')
    })

    it('should work if the second number is negative', () => {
        expect(subtract('999', '-123')).toEqual('1122')
    })

    it('should work if the first number is negative', () => {
        expect(subtract('-999', '123')).toEqual('-1122')
    })

    it('should work if both numbers are negative', () => {
        expect(subtract('-999', '-123')).toEqual('-876')
    })
})
