var largestIsland = function (grid) {
  const flatGrid = grid.flat();

  const numberOfZeros = flatGrid.filter((item) => item === 0);
  const numberof1 = flatGrid.length - numberOfZeros.length;
  if (numberOfZeros.length === 0) {
    return numberof1;
  } else {
    return numberof1 + 1;
  }
};

const arr = [
  [1, 0, 1],
  [0, 0, 0],
  [0, 1, 1],
];

console.log(largestIsland(arr));
