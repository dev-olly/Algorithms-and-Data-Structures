function solve(numbers: number[]): number[] {
  const output: number[] = new Array(numbers.length - 2).fill(0);

  for (let i: number = 0; i < arr.length - 2; i++) {
    const isSubArrayZag = isZigZag(numbers.slice(i, i + 3));
    output[i] = isSubArrayZag ? 1 : 0;
  }

  return output;
}

function isZigZag(numbers: number[]): boolean {
  if (numbers[0] > numbers[1] && numbers[1] < numbers[2]) return true;
  else if (numbers[0] < numbers[1] && numbers[1] > numbers[2]) return true;

  return false;
}

const arr: number[] = [1, 3, 4, 3, 2];

console.log(solve(arr));
