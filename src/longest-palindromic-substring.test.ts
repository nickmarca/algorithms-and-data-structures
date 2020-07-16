import { longestPalindromicSubstring } from './longest-palindromic-substring';

describe('longestPalindromicSubstring', () => {

    it("should return empty string for `friend`", () => {
        expect(longestPalindromicSubstring("friend")).toBe("");
    });

    it("should return `racecar` for `tracecar`", () => {
       expect(longestPalindromicSubstring("tracecar")).toBe("racecar");
    });

    it("should return `illi` for `million`", () => {
       expect(longestPalindromicSubstring("million")).toBe("illi");
    });

    it("should return `banana` for `anana`", () => {
       expect(longestPalindromicSubstring("banana")).toBe("anana");
    });
});
