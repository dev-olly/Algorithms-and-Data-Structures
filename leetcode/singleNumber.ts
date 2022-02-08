function singleNumber(nums: number[]): number {
  const hashset = new Set<number>();

  for (let i = 0; i < nums.length; i++) {
    if (hashset.has(nums[i])) {
      hashset.delete(nums[i]);
    } else {
      hashset.add(nums[i]);
    }
  }
  const arr: number[] = Array.from(hashset);

  return arr[0];
}

const nums = [4, 1, 2, 1, 2];

console.log(singleNumber(nums));
