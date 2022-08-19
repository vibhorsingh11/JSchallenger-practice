/* Write a function that takes an array (a) and a value (b) as argument
The function should remove all elements equal to 'b' from the array
Return the filtered array */

function myFunction(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b) {
      a.splice(i, 1);
    }
  }
  return a;
}

console.log(myFunction([1, 2, 3], 2));
