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

module.exports = { reverseInt };