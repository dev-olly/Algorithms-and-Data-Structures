const squareEven = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      arr[i] = arr[i] * arr[i];
    }
  }
  return arr;
};

const arr = [9, -2, -9, 11, 56, -12, -3];

console.log(squareEven(arr));
