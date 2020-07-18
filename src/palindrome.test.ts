import { reverse, isPalindrome, isPalindrome2, isPalindrome3 }  from "./palindrome";

const testCases = new Map([
    ["abc", false],
    ["abba", true],
    ["racecar", true],
    ["friends", false],
    ["eve", true],
    ["abcdcba", true],
    ["abcddcba", true],
]);

describe("Palindromes", () => {

    for(const [str, res] of testCases) {
        test(`${str} result should be ${res}`, () => {
           expect(isPalindrome(str)).toBe(res);
        });

        test(`${str} result should be ${res}`, () => {
           expect(isPalindrome3(str)).toBe(res);
        });
    }

    test("reverse string fn", () => {
       const a = "abc";
       const b = "cba";

       const p = reverse(a);
       expect(p).toEqual(b);
    });

    test("is palindrome fn: negative case", () => {
       const a = "abc";

       expect(isPalindrome(a)).toBe(false);
    });

    test("is palindrome fn: positive case", () => {
        const a = "abba";

        expect(isPalindrome(a)).toBe(true);
    });

    test("is palindrome fn: positive case", () => {
        const a = "abba";

        expect(isPalindrome2(a)).toBe(true);
    });

    test("is palindrome fn: negative case", () => {
        const a = "abc";

        expect(isPalindrome2(a)).toBe(false);
    });
});
