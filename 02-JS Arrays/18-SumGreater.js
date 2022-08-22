/* Write a function that takes an array (a) and a number (b) as arguments
Sum up all array elements with a value greater than b
Return the sum */

function myFunction(a, b) {
  return a.reduce((acc, ele) => (ele > b ? acc + ele : acc), 0);
}

console.log(myFunction([1, 2, 3, 4, 5, 6, 7], 2));
