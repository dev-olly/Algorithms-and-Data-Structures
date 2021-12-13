function makeIncreasing(numbers) {
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] >= numbers[i + 1]) {
      const digits = ("" + numbers[i]).split("");

      const swapped = parseInt(swap(digits).join(""));
      numbers[i] = swapped;
      //   makeIncreasing(numbers);
      if (swapped >= numbers[i + 1]) {
        return false;
      }
    }
  }
  return true;
}

function swap(arra) {
  [arra[0], arra[arra.length - 1]] = [arra[arra.length - 1], arra[0]];
  return arra;
}

console.log(makeIncreasing([1, 15, 10, 20]));
