const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
    let arr = [2,3,1,2,3]
    test("shuffle Array should return some arrays", () => {
        expect(shuffleArray(arr)).not.toBe(arr)
    });
    test("shuffleArray should contain same items as original array", () => {
        expect(shuffleArray(arr)).toContain(2)
    });
})