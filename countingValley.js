function countingValleys(steps, path) {
  let i = 0;
  let numOfValley = 0;
  // Write your code here
  for (const step of path) {
    if (step === "U") {
      i += 1;
    } else {
      if (i == 0) {
        numOfValley++;
      }
      i -= 1;
    }
  }
  return numOfValley;
}

const paths = "DDUUDDUDUUUD";

countingValleys(paths.length, paths);
