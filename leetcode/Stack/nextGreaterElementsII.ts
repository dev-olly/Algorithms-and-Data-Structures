// function nextGreaterElements(nums: number[]): number[] {
//   const stack: number[][] = [[nums[0], 0]];
//   const output: number[] = new Array(nums.length).fill(null);

//   for (let i: number = 1; i < 2 * nums.length - 1; i++) {
//     let j = i % nums.length;
//     while (stack.length !== 0 && stack[stack.length - 1][0] < nums[j]) {
//       const [item, index] = stack.pop();
//       output[index] = nums[j];
//     }
//     if (output[j] === null) {
//       stack.push([nums[j], j]);
//     }
//   }

//   while (stack.length !== 0) {
//     const [item, index] = stack.pop();
//     output[index] = -1;
//   }

//   return output;
// }

function nextGreaterElements(nums: number[]): number[] {
  const output = new Array(nums.length).fill(-1);

  for (let i: number = 0; i < nums.length; i++) {
    for (let j: number = 1; j < nums.length; j++) {
      const index = (i + j) % nums.length;

      if (nums[index] > nums[i]) {
        output[i] = nums[index];
        break;
      }
    }
  }
  return output;
}

const nums = [1, 2, 3, 4, 3];

console.log(nextGreaterElements(nums));
