const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('returns an array', () => {
        expect(shuffleArray([4,3,2]).length).toEqual(3)
    })

    test('contains same items', () => {
        expect(shuffleArray(['car','bike','shoe'])).toEqual(expect.arrayContaining(['car','bike','shoe']))
    })
})