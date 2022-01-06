var selfDividingNumbers = function (left, right) {
  const output = [];
  for (let item = left; item <= right; item++) {
    let number = item;
    if (number > 0 && number < 10) {
      output.push(number);
    } else if (number > 10) {
      while (number > 0) {
        const remainder = number % 10;
        if (remainder === 0) {
          break;
        }
        if (item % remainder !== 0) {
          break;
        }
        number = (number - remainder) / 10;
      }
      if (number === 0) {
        output.push(item);
      }
    }
  }

  return output;
};

const left = 1;
const right = 22;

console.log(selfDividingNumbers(left, right));
