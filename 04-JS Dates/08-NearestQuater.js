/* Write a function that takes a Date instance as argument
It should return the next nearest quarter hour in minutes
For example, if the given date has the time 10:01 the function should return 15 */

function myFunction(date) {
  const min = date.getMinutes();
  for (let i = 15; i <= 60; i += 15) {
    if (i - min > 0 && min < 45) return i;
    else if (min > 45) return 0;
  }
}

console.log(myFunction(new Date(2021, 8, 10, 15, 14, 00)));
