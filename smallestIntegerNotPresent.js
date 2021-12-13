function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length === 0) {
    return 1;
  }
  const mySet = new Set();
  for (const a of A) {
    if (a > 0) {
      mySet.add(a);
    }
  }
  if (!mySet.size) {
    return 1;
  }

  for (let i = 1; i < A.length + 2; i++) {
    if (!mySet.has(i)) {
      return i;
    }
  }
}

const arr = [0, 0, 1, 2, 3];

console.log(solution(arr));
