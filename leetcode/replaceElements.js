var replaceElements = function (arr) {
  let n = arr.length - 1;
  let max = arr[n];
  output = [];
  output[n] = -1;

  for (let i = n - 1; i >= 0; i--) {
    if (arr[i + 1] > max) {
      max = arr[i + 1];
    }
    output[i] = max;
  }

  return output;
};

const arr = [17, 18, 5, 4, 6, 1];

console.log(replaceElements(arr));
