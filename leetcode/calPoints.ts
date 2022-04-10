function calPoints(ops: string[]): number {
  const numbers = [];
  const set = new Set(['+', 'C', 'D']);
  let total = 0;

  for (let i = 0; i < ops.length; i++) {
    const char = ops[i];
    if (!set.has(char)) {
      numbers.push(parseInt(char));
      total += parseInt(char);
    } else if (char === '+') {
      const sum = numbers[numbers.length - 1] + numbers[numbers.length - 2];
      numbers.push(sum);
      total += sum;
    } else if (char === 'D') {
      const sum = numbers[numbers.length - 1] * 2;
      numbers.push(sum);
      total += sum;
    } else if (char === 'C') {
      const sum = numbers.pop();
      total -= sum;
    }
  }

  return total;
}
