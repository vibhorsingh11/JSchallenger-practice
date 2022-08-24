/* Write a function that takes an object (a) and a string (b) as argument
Return true if the object has a property with key 'b', but only if it has a truthy value
In other words, it should not be null or undefined or false
Return false otherwise */

function myFunction(a, b) {
  if (a.hasOwnProperty(b)) {
    if (a[b]) return true;
    return false;
  }
}

/* Alternative Solution */
function myFunction(a, b) {
  return Boolean(a[b]);
}

console.log(myFunction({ x: "a", y: null, z: "c" }, "y"));
