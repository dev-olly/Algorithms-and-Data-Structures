function kangaroo(x1: number, v1: number, x2: number, v2: number): string {
  // Write your code here
  if (x1 === x2 && v1 !== v2) {
    return 'NO';
  }
  const diff_x = x2 - x1;
  const diff_v = v1 - v2;

  if (diff_x / diff_v >= 0 && Number.isInteger(diff_x / diff_v)) {
    return 'YES';
  } else {
    return 'NO';
  }

  //   return Number.isInteger(x) && x >= 0 ? 'YES' : 'NO';
}

console.log(kangaroo(0, 2, 5, 3));
