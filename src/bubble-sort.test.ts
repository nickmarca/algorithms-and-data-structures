import { bubbleSort } from './bubble-sort';

const testCases = [
  [[3, 2, 1], [1, 2, 3]],
  [[1], [1]],
  [[8, 2, 3, 5, 1, 0, 2], [0, 1, 2, 2, 3, 5, 8]],
  [[3, 2, 2, 3, 0], [0, 2, 2, 3, 3]],
];

describe("bubble-sort", () => {

    for (const [input, output] of testCases) {
        it(`given input ${input} should output ${output}`, () => {
            expect(bubbleSort(input)).toEqual(output);
        });
    }

});
