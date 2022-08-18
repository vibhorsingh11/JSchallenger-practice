/* Write a function that takes a string as argument
As it is, the string has no meaning
Increment each letter to the next letter in the alphabet
Return the correct word */

function myFunction(str) {
  const arr = [...str];
  const correctedArray = arr.map((e) =>
    String.fromCharCode(e.charCodeAt() + 1)
  );
  return correctedArray.join("");
}

console.log(myFunction("bnchmf"));
