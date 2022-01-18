function maximumPerimeterTriangle(sticks) {
  // Write your code here
  sticks.sort((a, b) => a - b);

  let i = sticks.length - 3;

  while (i >= 0 && sticks[i] + sticks[i + 1] <= sticks[i + 2]) {
    i--;
  }

  if (i >= 0) {
    return [sticks[i], sticks[i + 1], sticks[i + 2]];
  } else {
    return [-1];
  }
}

const sticks = [1, 2, 3, 4, 5, 6, 10];

console.log(maximumPerimeterTriangle(sticks));
