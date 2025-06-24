function sortedSquares(nums) {
    let left = 0, right = nums.length - 1;
    let result = new Array(nums.length);
    let index = nums.length - 1;

    while (left <= right) {
        let leftSquare = nums[left] ** 2;
        let rightSquare = nums[right] ** 2;

        if (leftSquare > rightSquare) {
            result[index] = leftSquare;
            left++;
        } else {
            result[index] = rightSquare;
            right--;
        }
        index--;
    }

    return result;
}

console.log(sortedSquares([-7, -3, 2, 3, 11]));