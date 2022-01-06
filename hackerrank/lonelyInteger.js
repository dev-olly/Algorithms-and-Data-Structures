function lonelyinteger(a) {
  // Write your code here
  const map = new Map();

  for (let i = 0; i < a.length; i++) {
    if (map.has(a[i])) {
      map.set(a[i], map.get(a[i]) + 1);
    } else {
      map.set(a[i], 1);
    }
  }

  for (let i = 0; i < a.length; i++) {
    if (map.get(a[i]) === 1) {
      return a[i];
    }
  }
  return -1;
}

a = [1, 2, 3, 4, 3, 2, 1];

console.log(lonelyinteger(a));
