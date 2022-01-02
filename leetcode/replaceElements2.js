var replaceElements = function (arr) {
  let max = arr[arr.length - 1];

  for (let i = arr.length - 1; i >= 0; i--) {
    if (i === arr.length - 1) {
      arr[i] = -1;
    } else {
      const num = arr[i];

      arr[i] = max;
      max = Math.max(max, num);
    }
  }

  return arr;
};

const arr = [17, 18, 5, 4, 6, 1];

console.log(replaceElements(arr));
