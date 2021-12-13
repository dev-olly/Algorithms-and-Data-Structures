function jumpingOnClouds(c) {
  // Write your code here
  let numOfJump = 0;
  let i = 0;
  while (i < c.length - 1) {
    if (c[i + 2] !== 1) {
      numOfJump++;
      i = i + 2;
    } else {
      numOfJump++;
      i++;
    }
  }
  return numOfJump;
}

const a = [0, 0, 1, 0, 0, 1, 0];

const b = [0, 1, 0, 0, 0, 1, 0];

console.log(jumpingOnClouds(b));
