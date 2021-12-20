var merge = function (intervals) {
  const output = [];

  intervals.sort((a, b) => a[0] - b[0]);

  let i = 0;
  while (i < intervals.length - 1) {
    const next = intervals[i + 1];
    const current = intervals[i];
    if (next[0] <= current[1]) {
      output.push([
        Math.min(current[0], next[0]),
        Math.max(current[1], next[1]),
      ]);
      i = i + 2;
    } else {
      output.push(intervals[i]);
      i++;
    }
  }

  while (i < intervals.length) {
    output.push(intervals[i]);
    i++;
  }
  return output;
};

// const intervals = [
//   [1, 3],
//   [2, 6],
//   [8, 10],
//   [15, 18],
// ];

const intervals = [
  [1, 4],
  [0, 0],
];

console.log(merge(intervals));
