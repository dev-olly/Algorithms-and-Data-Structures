function twoArrays(k, A, B) {
  // Write your code here
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    if (A[i] + B[i] < k) {
      return 'NO';
    }
  }

  return 'YES';
}

const A = [2, 1, 3];
const B = [7, 8, 9];
const k = 10;

console.log(twoArrays(k, A, B));
