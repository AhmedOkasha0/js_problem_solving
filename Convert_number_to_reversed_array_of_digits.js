// change the number to string
// spit it in an array
// change the string to numbers
// reverse the array
function convertNumberToDigit(number) {
  let num = number.toString();
  let newArray = num.split(``).reverse().map(Number);
  return newArray;
}
console.log(convertNumberToDigit(12345));
