// function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
//   for (let i: number = 0; i < nums1.length; i++) {
//     let second = nums2.length - 1;
//     let nextMax = -1;
//     for (let j: number = 0; j < nums2.length; j++) {
//       if (nums2[j] === nums1[i]) {
//         second = j;
//       }
//       if (j > second && nums2[j] > nums1[i]) {
//         nextMax = nums2[j];
//         break;
//       }
//     }

//     nums1[i] = nextMax;
//   }
//   return nums1;
// }

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const hashtable = new Map<number, number>();
  for (let i: number = 0; i < nums2.length; i++) {
    hashtable.set(nums2[i], i);
  }

  const stack = [];

  for (let i: number = nums2.length - 1; i >= 0; i--) {
    const item = nums2[i];
    while (stack.length !== 0 && nums2[i] > stack[stack.length - 1]) {
      stack.pop();
    }
    nums2[i] = stack[stack.length - 1] || -1;
    stack.push(item);
  }

  for (let i: number = 0; i < nums1.length; i++) {
    nums1[i] = nums2[hashtable.get(nums1[i])];
  }

  return nums1;
}

const nums1 = [4, 1, 2];
const nums2 = [1, 3, 4, 2];
console.log(nextGreaterElement(nums1, nums2));
