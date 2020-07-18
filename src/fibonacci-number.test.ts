import { fib, fib2 } from './fibonacci-number';


const testCases = [
    [0, 0],
    [1, 1],
    [2, 1],
    [3, 2],
    [4, 3],
    [10, 55],
    [12, 144],
];

describe("fib", () => {

    for(const [input, output] of testCases) {
        it(`for input ${input}, output should be: ${output}`, () => {
            expect(fib(input, new Map())).toBe(output);
        });
    }
});

describe("fib", () => {

    for(const [input, output] of testCases) {
        it(`for input ${input}, output should be: ${output}`, () => {
            expect(fib2(input)).toBe(output);
        });
    }

});
