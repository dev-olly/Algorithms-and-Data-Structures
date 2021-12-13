function coveringDistance(cars, k) {
  if (cars.length === 0 || k === 0) return 0;

  let sortedArr = cars.sort((a, b) => a - b);
  console.log(sortedArr);

  let minDist = sortedArr[k - 1] - sortedArr[0] + 1;
  return minDist;
}

const cars = [2, 10, 8, 17];
const k = 3;

console.log(coveringDistance(cars, k));
