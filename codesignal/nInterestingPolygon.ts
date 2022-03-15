//app.codesignal.com/arcade/intro/level-2/yuGuHvcCaFCKk56rJ/solutions

// The equation for finding the area is n shape polygon is = 4(n-1) + 4(n-2) + 4(n-3) ..... 0(4(n-n))

// function solution(n: number): number {
//   if (n <= 1) return n;
//   let area = 1;
//   for (let i: number = 2; i <= n; i++) {
//     area += 4 * (i - 1);
//   }

//   return area;
// }

// The equation for finding the area is n shape polygon is Area = n * n + (n-1)(n-1)
function solution(n: number): number {
  return n * n + (n - 1) * (n - 1);
}

const n = 5;

console.log(solution(n));
