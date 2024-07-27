// create empty string
// take number argument and loop through it
// add the string to empty one

function stringRebate(n, s) {
  let newString = "";
  for (let i = 0; i < n; i++) {
    newString += s;
  }
  return newString;
}
console.log(stringRebate(3, "hello"));

// another solution

function stringRepeat2(str, num) {
  return str.repeat(num);
}
console.log(stringRepeat2("Hello", 5));
