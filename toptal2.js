// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, S) {
  // write your code in JavaScript (Node.js 8.9.4)
  let res = 0;

  // Calculate all subarrays
  for (let i = 0; i < A.length; i++) {
    let sum = 0;
    for (let j = i; j < A.length; j++) {
      // Calculate required average
      sum += A[j];
      let len = j - i + 1;

      // Check if average
      // is equal to k
      if (sum % len == 0) {
        let avg = sum / len;

        // jequired average found
        if (avg == S)
          // Increment res
          res++;
      }
    }
  }
  return res;
}
