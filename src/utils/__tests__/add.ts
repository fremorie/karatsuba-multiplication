import { add } from '../add'

describe('add', () => {
    it('should add two numbers without overflow', () => {
        expect(add('456', '123')).toEqual('579')
    })

    it('should add two numbers with overflow', () => {
        expect(add('126', '456')).toEqual('582')
    })

    it('should add two numbers of different length', () => {
        expect(add('123123123', '999')).toEqual('123124122')
    })

    it('should work independently from order', () => {
        expect(add('999', '123123123')).toEqual('123124122')
    })

    it('should work on big integers', () => {
        const x = '12312312312312312312312313123123131232131231231312312312312313'
        const y = '99999988888837373737373737373737373722229999988765765764651111111'

        expect(add(x, y)).toEqual('100012301201149686049686049686860496853462131219997078076963423424')
    })
})