const { reverse, isPalindrome, isPalindrome2 } = require("./Palindromes");

describe("Palindromes", () => {

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