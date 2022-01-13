function sockMerchant(n, ar) {
  // Write your code here
  const map = new Map();
  let count = 0;

  for (let i = 0; i < ar.length; i++) {
    if (map.has(ar[i])) {
      map.set(ar[i], map.get(ar[i]) + 1);
    } else {
      map.set(ar[i], 1);
    }
  }

  for (let i = 0; i < ar.length; i++) {
    if (map.get(ar[i]) >= 2) {
      count++;
      map.set(ar[i], map.get(ar[i]) - 2);
    }
  }

  return count;
}
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

console.log(sockMerchant(ar.length, ar));
