const { reverseInt, reverseInt2 } = require('./ReverseInt');

describe("reserve int", () => {

    test("should reverse 10", () => {
        expect(reverseInt(10)).toEqual(1);
        expect(reverseInt(5)).toEqual(5);
        expect(reverseInt(89)).toEqual(98);
        expect(reverseInt(-15)).toEqual(-51);
    });

    test("should reverse 10", () => {
        expect(reverseInt2(10)).toEqual(1);
        expect(reverseInt2(5)).toEqual(5);
        expect(reverseInt2(89)).toEqual(98);
        expect(reverseInt2(-15)).toEqual(-51);
    });
});