// My 2 pointer version

// function minSubArrayLen(target: number, nums: number[]): number {
//   if (nums.length === 0) {
//     return 0;
//   }
//   let i: number = 0;
//   let min: number = Number.MAX_VALUE;

//   while (i < nums.length) {
//     let sum = nums[i];
//     if (sum >= target) {
//       return 1;
//     }
//     let j = i + 1;
//     while (sum < target && j < nums.length) {
//       sum += nums[j];
//       if (sum >= target) {
//         let distance = j - i + 1;
//         min = Math.min(min, distance);
//         break;
//       }
//       j++;
//     }
//     i++;
//   }

//   if (min > nums.length) {
//     min = 0;
//   }

//   return min;
// }

function minSubArrayLen(target: number, nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }
  let sum: number[] = new Array(nums.length).fill(0);
  sum[0] = nums[0];
  let min: number = Number.MAX_VALUE;

  for (let i: number = 1; i < nums.length; i++) {
    sum[i] = sum[i - 1] + nums[i];
  }

  for (let i: number = 0; i < nums.length; i++) {
    for (let j: number = i; j < nums.length; j++) {
      const s = sum[j] - sum[i] + nums[i];
      if (s >= target) {
        min = Math.min(min, j - i + 1);

        break;
      }
    }
  }

  return min === Number.MAX_VALUE ? 0 : min;
}

const nums = [2, 3, 1, 2, 4, 3];
const target = 7;

console.log(minSubArrayLen(target, nums));
