function createHeap(nums) {
  const heap = [];

  for (let i = 0; i < nums.length; i++) {
    if (i == 0) {
      heap[i] = nums[i];
    } else {
      heap[i] = nums[i];
      const prevIndex = Math.floor(i / 2);
      if (heap[prevIndex] < heap[i]) {
        swap(heap, prevIndex, i);
      }
    }
  }

  return heap;
}

function swap(arr, i, j) {
  temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
}

const nums = [10, 20, 15, 30, 40];

console.log(createHeap(nums));
