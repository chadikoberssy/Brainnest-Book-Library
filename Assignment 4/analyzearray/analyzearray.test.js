const analyzeArray = require('./analyzeArray')


describe('analyzeArray', () => {
    test('Lets get this array, arrayed', () => {
        expect(analyzeArray([1,8,3,4,2,6])).toEqual({average: 4, maximum: 8, minimum: 1, length: 6})
    })
});