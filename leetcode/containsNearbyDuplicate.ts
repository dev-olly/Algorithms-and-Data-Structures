function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const hashmap = new Map<number, number>();

  for (let i: number = 0; i < nums.length; i++) {
    if (hashmap.has(nums[i])) {
      const index = hashmap.get(nums[i]);
      if (Math.abs(index - i) <= k) {
        return true;
      }
    }
    hashmap.set(nums[i], i);
  }
  return false;
}

const nums = [1, 2, 3, 1, 2, 3];
const k = 2;

console.log(containsNearbyDuplicate(nums, k));
