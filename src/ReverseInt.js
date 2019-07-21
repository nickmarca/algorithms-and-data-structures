const { reverse } = require('./Palindromes');

function reverseInt(i) {
    if(i > 0){
        const sI = i.toString();
        const r = reverse(sI);
        return parseInt(r);
    } else {
        const aI = Math.abs(i);
        const sI = aI.toString();
        const r = reverse(sI);
        return -parseInt(r);
    }
}

function reverseInt2(i) {
    return parseInt(i.toString().split('').reverse().join(''))  * Math.sign(i);
}

module.exports = { reverseInt, reverseInt2 };