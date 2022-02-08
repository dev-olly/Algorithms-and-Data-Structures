function intersection(nums1: number[], nums2: number[]): number[] {
  const intersection = new Set<number>();
  const set1 = new Set<number>([...nums1]);
  const set2 = new Set<number>([...nums2]);
  for (let i = 0; i < nums1.length; i++) {
    if (set1.has(nums1[i]) && set2.has(nums1[i])) {
      intersection.add(nums1[i]);
    }
  }

  return [...intersection];
}
