export function longestPalindromicSubstring(s: string): string {
    let longest = "";
    let pointerA = 0;
    const memo = new Map();

    while (pointerA < s.length) {

        let pointerB = 0;

        while (pointerB + pointerA < s.length) {
            const palindrome = isPalindromeMemo(s, pointerB, pointerB + pointerA, memo);

            if (palindrome.length > longest.length) {
                longest = palindrome;
            }

            pointerB++           
        }

        pointerA++;
    }

    return longest;
}

export function isPalindrome(str: string, pointerS: number, pointerE: number): string {
    const length = pointerE - pointerS + 1;
    const isEven = length % 2 === 0;

    let pointerA = Math.floor(length / 2) + pointerS - 1;
    let pointerB = isEven ? pointerA + 1 : pointerA + 2;

    let palindrome = isEven ? "" : str[pointerA + 1];

    while (pointerA >= pointerS) {
        if(str[pointerA] !== str[pointerB]) {
            return palindrome;
        }

        palindrome = str[pointerA] + palindrome + str[pointerB];

        pointerA--;
        pointerB++;
    }

    return palindrome;
}


export function isPalindromeMemo(str: string, pointerS: number, pointerE: number, memo: Map<string, string>): string {
    const length = pointerE - pointerS + 1;

    if (length === 1) {
        const palindrome = str[pointerS];
        memo.set(`${pointerS}-${pointerE}`, palindrome);
        return palindrome;
    }

    if (length === 2 && str[pointerS] === str[pointerE]) {
        const palindrome = str[pointerS] + str[pointerE];
        memo.set(`${pointerS}-${pointerE}`, palindrome);
        return palindrome;
    }

    const previous = memo.get(`${pointerS + 1}-${pointerE - 1}`);

    if (previous && str[pointerS] === str[pointerE]) {
        const palindrome = str[pointerS] + previous + str[pointerE];
        memo.set(`${pointerS}-${pointerE}`, palindrome);
        return palindrome;
    }

    return "";
}
