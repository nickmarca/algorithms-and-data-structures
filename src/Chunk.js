function chunk(array, size) {
   const r = helper(array, size);

   return r.map(i => i.slice().reverse()).slice().reverse();
}

function helper(array, size, chunks = [[]], it = 0) {
    if(it === array.length) {
        return chunks;
    }

    const [head, ...tail] = chunks;

    if (head.length < size) {
        const h = [array[it], ...head];
        return helper(array, size, [h, ...tail], it + 1);
    } else {
        return helper(array, size, [[array[it]], head, ...tail], it + 1);
    }
}

module.exports = { chunk };