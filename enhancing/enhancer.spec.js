const {succeed, repair, fail, get} = require('./enhancer.js');

describe('enhancement method testing', () => {
    describe('succeed()', () => {
        it('if enhancment < 20, add 1, returns item', () => {
            expect(succeed({name: "marc", durability: 14, enhancement: 10})).toStrictEqual({name: "marc", durability: 14, enhancement: 11})
        })
        it('if enhancement = 20, returns item', () => {
            expect(succeed({name: "marc", durability:14, enhancement: 20})).toStrictEqual({name: "marc", durability:14, enhancement: 20})
        })
        it('if maxes enhancement at 20', () => {
            expect(succeed({name: "marc", durability:14, enhancement: 40})).toStrictEqual({name: "marc", durability:14, enhancement: 20})
        })
    })

    describe('fail()', () => {
        it('if the enh < 15, durab -5', () => {
            expect(fail({name: "marc", durability:14, enhancement: 10})).toStrictEqual({name: "marc", durability:9, enhancement: 10})
        })
        it('if enh = 15, durab -10', () => {
            expect(fail({name: "marc", durability:14, enhancement:15})).toStrictEqual({name: "marc", durability:4, enhancement: 15})
        })
        it('if enh > 16, enh - 1', () => {
            expect(fail({name: "marc", durability:14, enhancement: 20})).toStrictEqual({name: "marc", durability:4, enhancement: 19})
        })
    })

    describe('repair()', () => {
        it('resets durability to 100', () => {
            expect(repair({name: "marc", durability:14, enhancement: 20})).toStrictEqual({name: "marc", durability:100, enhancement: 20})
        })
        it('maxes durability at 100', () => {
            expect(repair({name: "marc", durability:140, enhancement: 20})).toStrictEqual({name: "marc", durability:100, enhancement: 20})
        })
    })

    describe('get()', () => {
        it('returns item untouched if enh = 0', () => {
            expect(get({name: "marc", durability:14, enhancement: 0})).toStrictEqual({name: "marc", durability:14, enhancement: 0})
        })
        it('returns item.name [=enh] if enh > 0', () => {
            expect(get({name: "marc", durability:14, enhancement: 20})).toStrictEqual({name: "[+20] marc", durability:14, enhancement: 20})
        })
    })
})