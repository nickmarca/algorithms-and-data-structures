const { binaryConsecutiveOne } = require('./BinaryConsecutiveOne');

describe('binary consecutive one',  () => {
    test('13 should be 2', () => {
        expect(binaryConsecutiveOne(13)).toEqual(2);
    });

    test('5 should be 1', () => {
        expect(binaryConsecutiveOne(5)).toEqual(1);
    });

    test('40 should be 1', () => {
        expect(binaryConsecutiveOne(1)).toEqual(1);
    });

    test('391 should be 3', () => {
        expect(binaryConsecutiveOne(391)).toEqual(3);
    });

    test('85 should be 1', () => {
        expect(binaryConsecutiveOne(85)).toEqual(1);
    });

    test('7 should be 3', () => {
       expect(binaryConsecutiveOne(7)).toEqual(3);
    });
});