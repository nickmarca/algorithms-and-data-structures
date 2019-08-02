const { binaryConvertor } = require('./BinaryConvertor');

function binaryConsecutiveOne(n) {
    const b = binaryConvertor(n);

    return helper(b.split(''));
}


function helper(b, s = 0, m = 0, i = 0) {
    if (i === b.length) {
        return s;
    }
    else if( b[i] === '1') {
        const n = m + 1;
        return helper(b, s < n ? n : s, n,i + 1);
    } else {
        return helper(b, s, 0, i + 1);
    }
}

module.exports = { binaryConsecutiveOne };
