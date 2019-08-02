function maxChars(s) {
    const m = helper(s.split(''));

    let e = [];
    for ([key, value] of m.entries()) {
        if(!e.length) {
            e = [key, value];
        } else if(e[1] < value) {
            e = [key, value];
        }
    }

    return e[0];
}

function helper(a, m = new Map(), it = 0) {
    if(it === a.length) {
        return m
    } else {
        const v = m.get(a[it]) || 0;
        return helper(a, new Map([...m, [a[it], v + 1]]), it + 1);
    }
}



module.exports = { maxChars };