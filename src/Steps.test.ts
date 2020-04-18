import { steps } from './Steps';

describe("Steps", () => {
    it('should outputs the correct string', () => {
        const output = [];

        const log = (s: string) => {
            output.push(s);
        };

        steps(log, 3);

        expect(output.length).toBe(3);
        expect(output[0]).toBe('#  ');
        expect(output[1]).toBe('## ');
    });
});
