const secretDiary = require('../../src/secretDiary.js')

describe('diary',()=>{
    beforeEach(()=>{
         diary= new secretDiary
    })

    it ('add entries to locked diary',()=>{
        const expected = 'diary locked'
        const result= diary.addEntry('test')

        expect(result).toEqual(expected)
    })

    it('add entries to unlocked diary',()=>{
        diary.unlock()
        const expected=['test']
        const result= diary.addEntry('test')

        expect(result).toEqual(expected)

    })



})