/* Write a function that takes an object as argument
Some of the property values contain empty strings
Replace empty strings and strings that contain only whitespace with null values
Return the resulting object */

function myFunction(obj) {
  const newObj = { ...obj };
  for (let key in newObj) {
    if (newObj[key].trim() === "") {
      newObj[key] = null;
    }
  }
  return newObj;
}

console.log(myFunction({ a: "a", b: "b", c: "" }));
