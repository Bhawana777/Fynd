let primes = [2, 3, 5, 7, 11, 13];

console.log(primes[0]);
console.log(primes[5]);
console.log(primes[6]);

console.log(primes.length);

primes[2] = "Five"; // does not work - string is immutable
console.log(primes);

primes[6] = 17;
primes[8] = 23;
console.log(primes);