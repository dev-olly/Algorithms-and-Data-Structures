var validMountainArray = function (arr) {
  if (arr.length < 3) {
    return false;
  }
  let isUp = false;
  let isDown = false;
  let currentDiff = 0;

  for (let i = 1; i < arr.length; i++) {
    const diff = arr[i] - arr[i - 1];
    if (i === 1 && diff <= 0) {
      return false;
    }
    isUp = true;
    if (isUp && diff === 0) {
      return false;
    }
    if (diff < 0 && !isDown) {
      isDown = true;
    }

    if (isDown && diff > 0) {
      return false;
    }
  }

  return isUp && isDown;
};

arr = [0, 2, 3, 3, 5, 2, 1, 0];

console.log(validMountainArray(arr));
