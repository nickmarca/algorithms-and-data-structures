function fizzBuzz(n, i = 1) {
    if(i > n) {
        return;
    }

    if(i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz');
        fizzBuzz(n, i + 1);
    } else if(i % 3 === 0) {
        console.log('fizz');
        fizzBuzz(n, i + 1);
    } else if(i % 5 === 0) {
        console.log('buzz');
        fizzBuzz(n, i + 1);
    } else {
        console.log(i);
        fizzBuzz(n, i + 1);
    }
}

module.exports = { fizzBuzz };