function binaryConvertor(i) {
    const a = helper(i);
    return a.join('');
}

function helper(i, a = []) {
    if(i < 1) {
        return a;
    } else {
        const b = [isEven(i) ? 0 : 1].concat(a);
        return helper((Math.floor(i / 2)), b);
    }
}

function isEven(n) {
    return n % 2 === 0;
}

module.exports = { binaryConvertor };