/* Write a function that takes an array with arbitrary elements and a number as arguments
Return a new array, the first element should be either the given number itself
or zero if the number is smaller than 6
The other elements should be the elements of the original array
Try not to mutate the original array */

function myFunction(arr, num) {
  let arr2 = [...arr];
  if (num < 6) {
    arr2.unshift(0);
  } else {
    arr2.unshift(num);
  }
  return arr2;
  /* Alternative Solution */
  //   return [...(num > 5 ? [num] : [0]), ...arr];
}

console.log(myFunction([1, 2, 3], 6));
