function moveElementToEnd(array, toMove) {
  // Write your code here.
  let i = 0;
  let j = array.length - 1;
  while (i < j) {
    const ith = array[i];
    const jth = array[j];
    if (ith === toMove && jth !== toMove) {
      array[i] = jth;
      array[j] = toMove;
      j--;
      i++;
    } else if (ith !== toMove && jth === toMove) {
      j--;
    } else if (ith !== toMove && jth !== toMove) {
      i++;
    } else {
      j--;
    }
  }

  return array;
}

array = [2, 1, 2, 2, 2, 3, 4, 2];
toMove = 2;

console.log(moveElementToEnd(array, toMove));
