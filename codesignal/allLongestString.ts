function solution(inputArray: string[]): string[] {
  let output = [inputArray[0]];
  let max = inputArray[0].length;
  for (let i: number = 1; i < inputArray.length; i++) {
    const strLen = inputArray[i].length;
    if (strLen < max) continue;
    else if (strLen === max) output.push(inputArray[i]);
    else {
      output = [inputArray[i]];
      max = strLen;
    }
  }

  return output;
}

const inputArray = ['abc', 'eeee', 'abcd', 'dcd'];

console.log(solution(inputArray));
