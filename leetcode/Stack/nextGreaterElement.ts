function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  if (nums2.length === 0) {
    return;
  }
  const stack = [nums2[0]];
  const hashmap = new Map<number, number>();

  for (let i: number = 1; i < nums2.length; i++) {
    while (stack.length !== 0 && stack[stack.length - 1] < nums2[i]) {
      const number = stack.pop();
      hashmap.set(number, nums2[i]);
    }
    stack.push(nums2[i]);
  }

  while (stack.length !== 0) {
    const last = stack.pop();
    hashmap.set(last, -1);
  }
  //   console.log(hashmap);

  for (let i: number = 0; i < nums1.length; i++) {
    nums1[i] = hashmap.get(nums1[i]);
  }

  return nums1;
}
