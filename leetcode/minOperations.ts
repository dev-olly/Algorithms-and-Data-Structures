function minOperations(logs: string[]): number {
  const stack = [];

  for (let i = 0; i < logs.length; i++) {
    const log = logs[i];

    if (log === '../') {
      stack.pop();
    } else if (log === './') {
      continue;
    } else {
      stack.push(log);
    }
  }

  return stack.length;
}
