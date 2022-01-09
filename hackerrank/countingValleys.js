function countingValleys(steps, path) {
  // Write your code here

  let numberOfValley = 0;
  let sum = 0;

  for (let i = 0; i < steps; i++) {
    if (path[i] === 'U') {
      if (sum < 0 && sum + 1 === 0) {
        numberOfValley++;
      }
      sum += 1;
    } else {
      sum -= 1;
    }
  }

  return numberOfValley;
}

const steps = 8;
const path = 'UDDDUDUU';

console.log(countingValleys(steps, path));
