/* Write a function that takes an array of strings as argument
Return the longest string */

function myFunction(arr) {
  return arr.reduce((a, b) => (a.length <= b.length ? b : a));
}

console.log(myFunction(["I", "need", "candy"]));
