var minProductSum = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => b - a);
  let sum = 0;

  for (let i = 0; i < nums1.length; i++) {
    sum += nums1[i] * nums2[i];
  }

  return sum;
};

const nums1 = [2, 1, 4, 5, 7];
const nums2 = [3, 2, 4, 8, 6];

console.log(minProductSum(nums1, nums2));
