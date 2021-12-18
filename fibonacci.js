function fib(num) {
  if (num <= 1) {
    return num;
  }
  return fib(num - 1) + fib(num - 2);
}

console.log(fib(6));
