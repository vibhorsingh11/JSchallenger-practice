/* Write a function that takes an array of numbers as argument
It should return the average of the numbers */

function myFunction(arr) {
  const sum = arr.reduce((acc, ele) => acc + ele, 0);
  return sum / arr.length;
}

console.log(myFunction([10, 100, 40]));
