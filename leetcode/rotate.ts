function rotate(nums: number[], k: number): void {
  const output = [...nums];
  for (let i: number = nums.length - 1; i >= 0; i--) {
    const newIndex = (i + k) % nums.length;
    nums[newIndex] = output[i];
  }

  console.log(nums);
}

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;

rotate(nums, k);
