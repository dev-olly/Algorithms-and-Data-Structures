function intersect(nums1: number[], nums2: number[]): number[] {
  const output: number[] = [];
  const hashmap = new Map<number, number>();

  for (let i: number = 0; i < nums1.length; i++) {
    if (hashmap.has(nums1[i])) {
      hashmap.set(nums1[i], hashmap.get(nums1[i]) + 1);
    } else {
      hashmap.set(nums1[i], 1);
    }
  }

  for (let i: number = 0; i < nums2.length; i++) {
    if (hashmap.has(nums2[i]) && hashmap.get(nums2[i]) > 0) {
      output.push(nums2[i]);
      hashmap.set(nums2[i], hashmap.get(nums2[i]) - 1);
    }
  }

  return output;
}
const nums1 = [4, 7, 9, 7, 6, 7];
const nums2 = [9, 4, 9, 8, 4];

console.log(intersect(nums1, nums2));
