function flippingBits(n) {
  // Write your code here
  console.log(parseInt(n, 10).toString(2));

  console.log('~n');

  console.log(parseInt(~n, 10).toString(2));

  const number = ~n >>> 0;
  // return
  console.log('binary');
  console.log(parseInt(number, 10).toString(2));

  return number;
}

n = 5;

console.log(flippingBits(4));
