/* Write a function that takes an array (a) and a value (n) as arguments
Save every nth element in a new array
Return the new array */

function myFunction(a, n) {
  let rest = [...a];
  let result = [];
  for (let i = 0; i < a.length; i++) {
    if (rest.length < n) break;
    result.push(rest[n - 1]);
    rest = rest.slice(n);
  }
  return result;
}

console.log(myFunction([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
