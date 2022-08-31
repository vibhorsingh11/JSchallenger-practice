/* Write a function that takes a Set and an array as arguments
If not already existing, add each element in the array to the Set
Return the modified Set */

function myFunction(set, arr) {
  arr.forEach((ele) => set.add(ele));
  return set;
}

console.log(myFunction(new Set([1, 2, 3]), [4, 5, 6]));
