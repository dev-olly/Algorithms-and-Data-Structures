var SparseVector = function (nums) {
  this.nums = nums;
};

SparseVector.prototype.dotProduct = function (vec) {
  let sum = 0;

  for (let i = 0; i < vec.nums.length; i++) {
    sum += this.nums[i] * vec.nums[i];
  }

  return sum;
};

const nums1 = [1, 0, 0, 2, 3];
const nums2 = [0, 3, 0, 4, 0];

// console.log(SparseVector(nums1));

let v1 = new SparseVector(nums1);
let v2 = new SparseVector(nums2);

console.log(v1.dotProduct(v2));
