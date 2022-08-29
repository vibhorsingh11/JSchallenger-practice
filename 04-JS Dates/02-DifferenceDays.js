/* Write a function that takes two date instances as argument
It should return the number of days that lies between those dates */

function myFunction(a, b) {
  const dif = Math.abs(a - b);
  return dif / 1000 / 60 / 60 / 24;
}

console.log(myFunction(new Date("2020-06-11"), new Date("2020-06-01")));
