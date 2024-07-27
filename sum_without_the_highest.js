// for loop in the array and find highest and lowest number
// filter the array
// add the others number in another array and sum this
// if an empty value return 0

function sumWithoutHighestAndLowest(array) {
  if (array == null) {
    return 0;
  }
  // function return max and min value of the array
  let maxValue = Math.max(...array);
  let minValue = Math.min(...array);

  // this function filter the array
  let filteredArray = array.filter((x) => x !== maxValue && x !== minValue);
  //   console.log(filteredArray());

  let newArray = filteredArray.reduce(
    (acc, currentValue) => acc + currentValue,
    0
  );
  return newArray;
}
console.log(sumWithoutHighestAndLowest([1, 3, 5, 7, 99, 10.22]));

// this is not working because if the highest value or lowest value is duplicated

function sumPositiveValue(arr) {
  if (arr == null) {
    return 0;
  }
  return arr
    .sort((a, b) => a - b)
    .slice(1 - 1)
    .reduce((acc, currentValue) => acc + currentValue, 0);
}
console.log(sumPositiveValue([1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9]));

// this is the tru solution
