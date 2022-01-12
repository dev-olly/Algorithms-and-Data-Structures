var intersection = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const intersection = [];

  for (let i = 0; i < nums2.length; i++) {
    if (set1.has(nums2[i])) {
      intersection.push(nums2[i]);
      set1.delete(nums2[i]);
    }
  }

  return intersection;
};

const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];

console.log(intersection(nums1, nums2));
