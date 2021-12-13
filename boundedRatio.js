function boundedRatio(a, l, r) {
  const possibleValueOfX = range(l, r);
  console.log(possibleValueOfX);

  const generatedArray = Array.from({ length: a.length }, () => false);
  console.log(generatedArray);

  for (var i = 0; i < a.length; i++) {
    for (const x of possibleValueOfX) {
      const value = (i + 1) * x;
      if (value === a[i]) {
        generatedArray[i] = true;
        break;
      } else {
        generatedArray[i] = false;
      }
    }
  }

  return generatedArray;
}

function range(start, end) {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);
}

console.log(
  boundedRatio([65, 46, 60, 164, 243, 228, 231, 298, 231, 211], 20, 50)
);
