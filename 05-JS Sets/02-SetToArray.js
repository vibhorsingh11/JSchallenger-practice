/* Write a function that takes a Set as argument
Convert the Set to an Array
Return the Array */

function myFunction(set) {
  return [...set];
}

console.log(myFunction(new Set([1, 2, 3])));
