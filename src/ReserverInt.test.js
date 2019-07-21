const { reverseInt } = require('./ReverseInt');

describe("reserve int", () => {

    test("should reverse 10", () => {
        expect(reverseInt(10)).toEqual(1);
        expect(reverseInt(5)).toEqual(5);
        expect(reverseInt(89)).toEqual(98);
        expect(reverseInt(-15)).toEqual(-51);
    });
});