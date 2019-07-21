function reverse (a) {
    return a.split('').reduce((total, current) => {
        return current + total;
    }, '');
}

function isPalindrome(a) {
    const p = reverse(a);
    return p === a;
}

function isPalindrome2(a) {
    return a.split('').every((char, i) => {
        return char === a[a.length - i - 1];
    });
}

module.exports = { isPalindrome, reverse, isPalindrome2 };