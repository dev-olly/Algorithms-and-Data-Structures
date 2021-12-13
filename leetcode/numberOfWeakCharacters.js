// var numberOfWeakCharacters = function (properties) {
//   const sortedOnAttacks = properties.sort((a, b) => {
//     const difference = a[0] - b[0];
//     if (difference === 0) {
//       return a[1] - b[1];
//     }
//     return difference;
//   });
//   console.log(sortedOnAttacks);

//   let weakCharacters = 0;
//   let maxDefense = 0;
//   for (let i = sortedOnAttacks.length - 1; i >= 0; --i) {
//     const character = sortedOnAttacks[i];
//     maxDefense = Math.max(maxDefense, character[1]);
//     if (character[1] < maxDefense) {
//       // console.log(`Character ---- ${character}`);

//       ++weakCharacters;
//     }
//   }
//   return weakCharacters;
// };

const numberOfWeakCharacters = function (arr) {
  // Sort by attack ascending.
  // If attacks are equal, sort by defense descending.
  arr.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
  console.log(arr);

  let weak = 0;
  let max = 0;

  for (let i = arr.length - 1; i >= 0; --i) {
    max = Math.max(max, arr[i][1]);
    if (arr[i][1] < max) ++weak;
  }

  return weak;
};

const characters = [
  [7, 7],
  [1, 2],
  [9, 7],
  [7, 3],
  [3, 10],
  [9, 8],
  [8, 10],
  [4, 3],
  [1, 5],
  [1, 5],
];

console.log(numberOfWeakCharacters(characters));
