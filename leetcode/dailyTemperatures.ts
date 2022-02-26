function dailyTemperatures(temperatures: number[]): number[] {
  const output: number[] = new Array(temperatures.length).fill(0);
  for (let i: number = 0; i < temperatures.length; i++) {
    for (let j: number = i + 1; j < temperatures.length; j++) {
      if (temperatures[j] > temperatures[i]) {
        output[i] = j - i;
        break;
      }
    }
  }
  return output;
}

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];

console.log(dailyTemperatures(temperatures));
