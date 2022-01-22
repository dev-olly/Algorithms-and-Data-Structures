function minSubArrayLen(target: number, nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }
  let i: number = 0;
  let min: number = Number.MAX_VALUE;

  while (i < nums.length) {
    let sum = nums[i];
    if (sum >= target) {
      return 1;
    }
    let j = i + 1;
    while (sum < target && j < nums.length) {
      sum += nums[j];
      if (sum >= target) {
        let distance = j - i + 1;
        min = Math.min(min, distance);
        break;
      }
      j++;
    }
    i++;
  }

  if (min > nums.length) {
    min = 0;
  }

  return min;
}

const nums = [1, 1, 1, 1, 1, 1, 1, 1];
const target = 11;

console.log(minSubArrayLen(target, nums));
