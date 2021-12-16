function merge(nums1, nums2) {
  let i = 0;
  let j = 0;
  const output = [];
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      output.push(nums1[i]);
      i++;
    } else {
      output.push(nums2[j]);
      j++;
    }
  }

  while (i < nums1.length) {
    output.push(nums1[i]);
    i++;
  }
  while (j < nums2.length) {
    output.push(nums2[j]);
    j++;
  }

  return output;
}

const nums1 = [1, 3, 5, 7, 9];
const nums2 = [2, 4, 6, 8];

console.log(merge(nums1, nums2));
