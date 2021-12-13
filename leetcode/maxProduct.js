var maxProduct = function (nums) {
  let product = Number.NEGATIVE_INFINITY;
  let current = 1;

  for (let i = 0; i < nums.length; i++) {
    current *= nums[i];
    if (current < 0 && nums[i] > 0 ) {
      current = nums[i];
    }

    if (product < current) {
      product = current;
    }

    if (current === 0) {
      current = 1;
    }
  }

  return product;
};

// const nums = [2, 3, -2, 4];
// const nums = [3, -1, 4];
const nums = [-2, 3, -4];

console.log(maxProduct(nums));
