function solution(sequence: number[]): boolean {
  let count = 0;
  let prevMax = sequence[0];

  for (let i = 1; i < sequence.length; i++) {
    if (sequence[i] <= prevMax) {
      count++;
      if (i === 1 || sequence[i] > sequence[i - 2]) {
        prevMax = sequence[i];
      }
    } else {
      prevMax = sequence[i];
    }

    if (count > 1) return false;
  }

  return true;
}

// const arr = [1, 3, 2, 3];

// const arr = [1, 2, 1, 2];

// const arr = [10, 1, 2, 3, 4, 5];
// const arr = [10, 1, 11, 13, 14, 15];

const arr = [1, 2, 5, 3, 5];

console.log(solution(arr));
