const { binaryConvertor } = require('./BinaryConvertor');

describe("binaryConvertor", () => {

    test("244", () => {
        expect(binaryConvertor(244)).toEqual("11110100");
    });
});