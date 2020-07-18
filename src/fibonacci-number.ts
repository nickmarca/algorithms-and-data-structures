export function fib(n: number, memo: Map<number, number>) {
    if (n === 0) {
        return 0;
    }

    if (n === 1) {
        return 1;
    }

    if (memo.has(n)) {
        return memo.get(n);
    }

    const fibN = fib(n - 1, memo) + fib(n - 2, memo);
    memo.set(n, fibN);

    return fibN;
}

// time= O(n)
// space = O(n + n)

export function fib2(n: number) {
    const lastTwo = [0, 1];

    let counter = 3;

    while(counter <= n + 1) {
        const next = lastTwo[0] + lastTwo[1];
        lastTwo[0] = lastTwo[1],
        lastTwo[1] = next;

        counter++;
    }

    return n > 1 ? lastTwo[1] : lastTwo[n];
}

// time = O(n)
// space = O(1)
