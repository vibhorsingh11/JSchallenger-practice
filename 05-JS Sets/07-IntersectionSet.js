/* Write a function that takes two sets (a and b) as arguments
Get the intersection of the sets
In other words, return a set containing all elements that are both in a as well as b */

function myFunction(a, b) {
  const set = new Set();
  a.forEach((ele) => (b.has(ele) ? set.add(ele) : null));
  return set;
}

console.log(myFunction(new Set([1, 2, 3]), new Set([4, 5, 6])));
