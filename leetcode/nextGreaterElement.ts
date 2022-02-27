function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  for (let i: number = 0; i < nums1.length; i++) {
    let second = nums2.length - 1;
    let nextMax = -1;
    for (let j: number = 0; j < nums2.length; j++) {
      if (nums2[j] === nums1[i]) {
        second = j;
      }
      if (j > second && nums2[j] > nums1[i]) {
        nextMax = nums2[j];
        break;
      }
    }

    nums1[i] = nextMax;
  }
  return nums1;
}

const nums1 = [1, 3, 5, 2, 4];
const nums2 = [6, 5, 4, 3, 2, 1, 7];
console.log(nextGreaterElement(nums1, nums2));
