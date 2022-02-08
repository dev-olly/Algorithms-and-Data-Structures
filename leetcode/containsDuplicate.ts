function containsDuplicate(nums: number[]): boolean {
  const hashset = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (hashset.has(nums[i])) {
      return true;
    }
    hashset.add(nums[i]);
  }

  return false;
}
