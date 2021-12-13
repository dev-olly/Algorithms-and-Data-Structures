function boundedSquareSum(a, b, lower, upper) {
  const pairs = [];
  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < b.length; j++) {
      const asquare = a[i] * a[i];
      const bsquare = b[j] * b[j];

      const number = asquare + bsquare;
      if (number >= lower) {
        if (number <= upper) {
          pairs.push([i, j]);
        }
      }
    }
  }
  return pairs.length;
}

console.log(boundedSquareSum([3, -1, 9], [100, 5, -2], 7, 99));
