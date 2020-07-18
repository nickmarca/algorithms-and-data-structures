import { longestPalindromicSubstring, isPalindrome, isPalindromeMemo } from './longest-palindromic-substring';

const palindromeTestCases = new Map<string, string | [string, [number, number]]>([
    ["aba", "aba"],
    ["racecar", "racecar"],
    ["hello", "l"],
    ["four", ""],
    ["hi", ""],
    ["abccba", "abccba"],
    ["radar", "radar"],
    ["rotator", "rotator"],
    ["ee", "ee"],
    ["banana", ""],
    ["anana", "anana"],
    ["tracecar", ["racecar", [1, 7]]],
]);

const testCases = new Map([
    ["babad", "bab"],
    ["friend", "f"],
    ["tracecar", "racecar"],
    ["million", "illi"],
    ["banana", "anana"]
]);

describe('isPalindrome', () => {
    for (const [str, res] of palindromeTestCases) {
        it(`for input: ${str}, result should be ${res}`, () => {
            if (typeof res === "string") {
                expect(isPalindrome(str, 0, str.length - 1)).toBe(res);
            } else {
                const [resVal, [from, to]] = res;
                expect(isPalindrome(str, from, to)).toBe(resVal);
            }
        });
    }

});

describe('isPalindromeMemo', () => {
    it("should return `a` for `a`", () => {
        expect(isPalindromeMemo("a", 0, 0, new Map())).toBe("a");
    });

    it("should return `aba` for `aba`", () => {
        expect(isPalindromeMemo("aba", 0, 2, new Map([ ['1-1', 'b'] ]))).toBe("aba");
    });

    it("should return `abca` for ``", () => {
        expect(isPalindromeMemo("abca", 0, 3, new Map())).toBe("");
    });

    it("should return `ab` for ``", () => {
        expect(isPalindromeMemo("ab", 0, 1, new Map())).toBe("");
    });

    it("should return `aa` for `aa`", () => {
        const map = new Map();
        expect(isPalindromeMemo("aa", 0, 1, map)).toBe("aa");

        expect(map.get("0-1")).toBe("aa");
    });
});

describe('longestPalindromicSubstring', () => {
    for (const [str, res] of testCases) {
        it(`for input: ${str}, result should be ${res}`, () => {
            expect(longestPalindromicSubstring(str)).toBe(res);
        });
    }
});
