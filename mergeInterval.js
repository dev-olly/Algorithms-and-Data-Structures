var merge = function (intervals) {
  if (intervals.length <= 1) {
    return intervals;
  }
  intervals.sort((a, b) => a[0] - b[0]);

  const output = [];
  output.push(intervals[0]);
  let i = 1;
  while (i < intervals.length) {
    const previous = output[output.length - 1];
    const current = intervals[i];

    if (current[0] <= previous[1]) {
      output[output.length - 1] = [
        Math.min(current[0], previous[0]),
        Math.max(current[1], previous[1]),
      ];
    } else {
      console.log();

      output.push(intervals[i]);
    }
    i++;
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

// const intervals = [
//   [1, 4],
//   [0, 0],
// ];

// const intervals = [
//   [1, 4],
//   [4, 5],
// ];

const intervals = [
  [1, 4],
  [0, 2],
  [3, 5],
];

console.log(merge(intervals));
