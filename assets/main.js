console.log('i\'m alive');

// for loop da 1 a 100, multipli di 3: stampa fizz; multipli di 5: buzz; multipli di entrambi: fizzbuzz

for (let i = 1; i <= 100; i++) {
    if (i == 3) {
        console.log('Fizz');
    }
    else if (i == 5) {
        console.log('Buzz');
    }
    else if (i == 15) {
        console.log('FizzBuzz');
    }
    else {
        console.log(i);
    }
}