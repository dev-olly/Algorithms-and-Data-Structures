var findJudge = function (n, trust) {
  if (n === 1) {
    return 1;
  }
  const arr = new Array(n).fill(0);

  for (let i = 0; i < trust.length; i++) {
    arr[trust[i][0] - 1]--;
    arr[trust[i][1] - 1]++;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n - 1) {
      return i + 1;
    }
  }

  return -1;
};

// const n = 2;
// const trust = [[1, 2]];

const n = 4;
const trust = [
  [1, 2],
  [1, 3],
  [2, 1],
  [2, 3],
  [1, 4],
  [4, 3],
  [4, 1],
];

console.log(findJudge(n, trust));
