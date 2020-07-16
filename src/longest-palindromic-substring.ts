export function longestPalindromicSubstring(s: string): string {
    const array = s.split('');
    let longest = [0, 0];

    let pointerA = 0;
   
    while (pointerA < array.length) {
        let pointerB = pointerA + 1;

        while (pointerB < array.length) {

            if (isPalindrome(array, pointerA, pointerB)) {
                const [start, end] = longest;
                if ((pointerB - pointerA) > (end - start)) {
                    longest = [pointerA, pointerB + 1];
                }
            }

            pointerB++
        }

        pointerA++;
    }

    const [start, end] = longest;

    if (!start) {
      return "";
    } else {
        return s.slice(start, end);
    }
}



export function isPalindrome(array: string[], pointerA: number, pointerB: number): boolean {
    let counter = 0;

    while (pointerA <  pointerB) {
        if (array[pointerA] !== array[pointerB - counter]) {
            return false;
        }

        pointerA++;
        counter++;
    }

    return true;
}

// time = O(nˆ3)
// space = O(1)
