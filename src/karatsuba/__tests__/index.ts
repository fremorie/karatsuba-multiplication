import { karatsuba } from '../index'

describe('karatsuba', () => {
    describe('Single digit numbers', () => {
        const sets = [
            {x: '1', y: '2', result: '2'},
            {x: '2', y: '2', result: '4'},
            {x: '3', y: '3', result: '9'},
            {x: '4', y: '5', result: '20'},
            {x: '6', y: '6', result: '36'},
            {x: '10', y: '10', result: '100'},
            {x: '11', y: '11', result: '121'},
        ]

        sets.forEach(({x, y, result}) => {
            it(`should yield correct result for x=${x} and y=${y}`, () => {
                expect(karatsuba(x, y)).toEqual(result)
            })
        })
    })

    describe('Double digit numbers', () => {
        const sets = [
            {x: '10', y: '20', result: '200'},
            {x: '21', y: '22', result: '462'},
            {x: '34', y: '33', result: '1122'},
            {x: '45', y: '58', result: '2610'},
            {x: '62', y: '61', result: '3782'},
            {x: '99', y: '10', result: '990'},
            {x: '99', y: '99', result: '9801'},
        ]

        sets.forEach(({x, y, result}) => {
            it(`should yield correct result for x=${x} and y=${y}`, () => {
                expect(karatsuba(x, y)).toEqual(result)
            })
        })
    })

    describe('Triple digit numbers', () => {
        const sets = [
            {x: '123', y: '456', result: '56088'},
        ]

        sets.forEach(({x, y, result}) => {
            it(`should yield correct result for x=${x} and y=${y}`, () => {
                expect(karatsuba(x, y)).toEqual(result)
            })
        })
    })
})