const isFibonacci = (num) => {
    let a = 0, b = 1;
    while (b <= num) {
        if (b === num) {
            return `${num} é da sequência Fibonacci.`;
        }
        [a, b] = [b, a + b];
    }
    return `${num} não é da sequência Fibonacci.`;
};

const numero = 5;
console.log(isFibonacci(numero));