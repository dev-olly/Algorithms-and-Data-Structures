var countPoints = function (points, queries) {
  const totalPoint = [];
  for (let i = 0; i < queries.length; i++) {
    const [x, y, z] = queries[i];

    let queryPoint = 0;
    for (let j = 0; j < points.length; j++) {
      const [px, py] = points[j];
      const dx = Math.abs(px - x);
      const dy = Math.abs(py - y);
      const dx2 = dx * dx;
      const dy2 = dy * dy;
      const dz = Math.sqrt(dx2 + dy2);
      if (dz <= z) {
        queryPoint++;
      }
    }
    totalPoint.push(queryPoint);
  }

  return totalPoint;
};

const points = [
  [1, 3],
  [3, 3],
  [5, 3],
  [2, 2],
];
const queries = [
  [2, 3, 1],
  [4, 3, 1],
  [1, 1, 2],
];

console.log(countPoints(points, queries));
