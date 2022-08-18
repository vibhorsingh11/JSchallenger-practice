/*  This challenge is a little bit more complex
Write a function that takes a number (a) as argument
If a is prime, return a
If not, return the next higher prime number */

function myFunction(a) {
  let n = a;
  while (!isPrime(n)) n++;
  return n;
}

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

console.log(myFunction(38));
console.log(myFunction(7));
