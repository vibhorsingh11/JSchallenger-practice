/* Write a function that takes two arrays (a and b) as arguments
Create an object that has properties with keys 'a' and corresponding values 'b'
Return the object */

function myFunction(a, b) {
  const obj = {};
  for (let i = 0; i < a.length; i++) {
    obj[a[i]] = b[i];
  }
  return obj;
  /* Alternative solution */
  //return a.reduce((acc, cur, i) => ({ ...acc, [cur]: b[i] }), {});
}

console.log(myFunction(["w", "x", "y", "z"], [10, 9, 5, 2]));
