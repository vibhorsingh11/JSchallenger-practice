/* Write a function that takes an array of strings as argument
Group those strings by their first letter
Return an object that contains properties with keys representing first letters
The values should be arrays of strings containing only the corresponding strings
For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
{ a: ['Alf', 'Alice'], b: ['Ben']} */

function myFunction(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let firstChar = arr[i].substring(0, 1).toLowerCase();
    if (!(firstChar in obj)) {
      obj[firstChar] = [];
    }
    if (firstChar in obj) {
      obj[firstChar].push(arr[i]);
    }
  }
  return obj;
}

console.log(myFunction(["Alf", "Alice", "Ben"]));
console.log(myFunction(["Berlin", "Paris", "Prague"]));
console.log(myFunction(["Ant", "Bear", "Bird"]));
