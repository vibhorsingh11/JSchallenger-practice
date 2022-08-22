/* Merge two arrays with duplicate values
Write a function that takes two arrays as arguments
Merge both arrays and remove duplicate values
Sort the merge result in ascending order
Return the resulting array */

function myFunction(a, b) {
  let arr = a.concat(b);
  return arr.filter((x, i, arr) => arr.indexOf(x) === i).sort((a, b) => a - b);
  //Alternative Way
  //return [...new Set([...a, ...b])].sort((x, y) => x - y);
}

console.log(myFunction([1, 2, 3], [3, 4, 5]));
