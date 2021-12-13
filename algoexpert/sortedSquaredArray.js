function sortedSquaredArray(array) {
  // Write your code here.
  let smallPointer = 0;
  let largePointer = array.length - 1;
  let index = 0;
  const output = [];
  while (smallPointer < array.length) {
    let value;
    value = array[smallPointer] ** 2;
    smallPointer++;
    output[index] = value;
    index++;
  }

  return output;
}

const arr = [1, 2, 3, 4];

console.log(sortedSquaredArray(arr));
