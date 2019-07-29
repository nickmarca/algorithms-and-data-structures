const isEqual = require('lodash/isEqual');

const { subsets } = require('./Subsets');

describe('subsets', () => {
    test('it should contain all possibles subsets of a give array', () => {
        const s = [1, 2];
        const r = subsets(s);
        const expected = [ [null, null], [null, 1], [null, 2], [1, 2]];

        const assertion = isEqual(r.sort(), expected.sort());

        expect(assertion).toBeTruthy();
    });
});
    