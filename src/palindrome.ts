export function reverse (a: string) {
    return a.split('').reduce((total, current) => {
        return current + total;
    }, '');
}

export function isPalindrome(a) {
    const p = reverse(a);
    return p === a;
}

export function isPalindrome2(a: string) {
    return a.split('').every((char, i) => {
        return char === a[a.length - i - 1];
    });
}


export function isPalindrome3(str: string): boolean {

    const isEven = str.length % 2 === 0;

    let pointerA = Math.floor(str.length / 2) - 1;
    let pointerB = isEven ? pointerA + 1 : pointerA + 2;

    while (pointerA >= 0) {
        if (str[pointerA] !== str[pointerB]) {
            return false;
        }

        pointerA--;
        pointerB++;
    }

    return true;
}
