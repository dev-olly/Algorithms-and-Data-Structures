var minCostToMoveChips = function (position) {
  let even = 0;
  let odd = 0;

  for (let i = 0; i < position.length; i++) {
    if (position[i] % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }

  return even > odd ? odd : even;
};

const position = [1, 100000];

console.log(minCostToMoveChips(position));
