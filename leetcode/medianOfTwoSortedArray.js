var findMedianSortedArrays = function (nums1, nums2) {
  const arr = [...nums1, ...nums2].sort((a, b) => a - b);
  console.log(arr);

  if (arr.length === 1) {
    return arr[0];
  }

  const halfIndex = Math.floor(arr.length / 2);

  if (arr.length % 2 !== 0) {
    return arr[halfIndex];
  }

  const sum = arr[halfIndex] + arr[halfIndex - 1];
  return sum / 2;
};

const nums1 = [];
const nums2 = [2, 3];

console.log(findMedianSortedArrays(nums1, nums2));
