////////////////////////////////////////////////////////////////
// --- Directions                                             //
//                                                            //
// Write a function that accepts a positive number N.         //
// The function should console log a pyramid shape            //
// with N levels using the # character. Make sure the         //
// pyramid has spaces on both the left *and* right hand sides //
//                                                            //
// --- Examples                                               //
//                                                            //
// pyramid(1)                                                 //
// '#'                                                        //
//                                                            //
// pyramid(2)                                                 //
// ' # '                                                      //
// '###'                                                      //
//                                                            //
// pyrimid(3)                                                 //
// '  #  '                                                    //
// ' ### '                                                    //
// '#####'                                                    //
//                                                            //
// pyrimid(4)                                                 //
// '   #   '                                                  //
// '  ###  '                                                  //
// ' ##### '                                                  //
// '#######'                                                  //
//                                                            //
// pyrimid(5)                                                 //
// '    #    '                                                //
// '   ###   '                                                //
// '  #####  '                                                //
// ' ####### '                                                //
// '#########'                                                //
////////////////////////////////////////////////////////////////

const N = 3;

type Log = (s: string) => void;

function pyrimid(log: Log, n = N, counter = 0) {

    if(counter < n) {
        const blocks = 1 + counter * 2;
        const width = 1 + (n - 1) * 2;
        const blanks = width - blocks;
        const b1 = (new Array(blanks/2)).fill(' ');
        const b2 = (new Array(blanks/2)).fill(' ');
        const x = (new Array(blocks)).fill('#');

        const s = b1.concat(x).concat(b2).join('');

        log(s);
        pyrimid(log, n, counter + 1);
    } else {
        return;
    }
}

pyrimid((s: string) => console.log(s), 50);
