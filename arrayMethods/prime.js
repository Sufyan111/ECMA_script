const isPrime = (num) => {
    for (i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if (num % i == 0) {
            return `${num} is not a Prime Number`;
        }
    }
    return `${num} is a Prime Number`;
}

console.log(isPrime(122221));
console.log(isPrime(45987));
console.log(isPrime(791345));
console.log(isPrime(551));
console.log(isPrime(5419));
console.log(isPrime(8));
console.log(isPrime(212));
console.log(isPrime(79));
console.log(isPrime(75));
console.log(isPrime(65555));