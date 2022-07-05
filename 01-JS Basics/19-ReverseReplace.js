/* It seems like something happened to these strings
Can you figure out how to clear up the chaos?
Write a function that joins these strings together such that they form the following words:
'Javascript', 'Countryside', and 'Downtown'
You might want to apply basic JS string methods such as replace(), split(), slice() etc */

function myFunction(a, b) {
  let str = a.concat(b.split("").reverse().join("")).replace("%", "");
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(myFunction("java", "tpi%rcs"));
console.log(myFunction("c%ountry", "edis"));
