/* Write a function that takes two numbers, say x and y, as arguments
Check if x is divisible by y
If yes, return x
If not, return the next higher natural number that is divisible by y */

function myFunction(x, y) {
  return x % y === 0 ? x : myFunction(x + 1, y);
}

console.log(myFunction(1, 23));
console.log(myFunction(-5, 7));
