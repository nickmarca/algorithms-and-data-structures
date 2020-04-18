////////////////////////////////////////////////////////
// Directions                                         //
//                                                    //
// Write a function that accepts a positive number N. //
// The function should console log a step shape       //
// with N levels using the # character. Make sure the //
// step has spaces on the right hand side!            //
////////////////////////////////////////////////////////

const N = 10;

type Print = (s: string) => void;

export function steps(print: Print, n = N, counter = 1): void {
    if (counter <= n ) {
        const s = (new Array(counter)).fill('#').join('').concat((new Array(n - counter)).fill(' ').join(''));
        print(s);
        steps(print, n, counter + 1);
    } else {
        return;
    }
}
