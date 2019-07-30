const { maxChars } = require('./MaxChars');

describe("Max chars", () => {
    test("aeiii should return i", () => {
        expect(maxChars("aeiii")).toEqual("i");
    });

    test("abcda should return a", () => {
        expect(maxChars("abcda")).toEqual("a");
    });
});