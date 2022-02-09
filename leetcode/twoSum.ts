function twoSum(nums: number[], target: number): number[] {
  const hashmap = new Map<number, number>();
  const output: number[] = [];
  for (let i: number = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (hashmap.has(diff)) {
      output.push(hashmap.get(diff), i);
    } else {
      hashmap.set(nums[i], i);
    }
  }

  return output;
}

const nums = [2, 7, 11, 15];

const target = 9;

console.log(twoSum(nums, target));
