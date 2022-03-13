function solution(inputArray: number[]): number {
  let max = inputArray[0] * inputArray[1];

  for (let i = 1; i < inputArray.length - 1; i++) {
    max = Math.max(max, inputArray[i] * inputArray[i + 1]);
  }

  return max;
}
