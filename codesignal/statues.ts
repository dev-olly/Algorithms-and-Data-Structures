// function solution(statues: number[]): number {
//   statues.sort((a, b) => a - b);

//   let count = 0;

//   for (let i: number = 0; i < statues.length - 1; i++) {
//     let next = statues[i] + 1;
//     while (next !== statues[i + 1]) {
//       next++;
//       count++;
//     }
//   }

//   return count;
// }

function solution(statues: number[]): number {
  let max = -1;
  let min = Number.MAX_VALUE;

  for (let i: number = 0; i < statues.length; i++) {
    max = Math.max(max, statues[i]);
    min = Math.min(min, statues[i]);
  }

  return max - min - statues.length + 1;
}

const statues = [6, 2, 3, 8];

console.log(solution(statues));
