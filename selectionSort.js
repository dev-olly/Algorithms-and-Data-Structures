function selectionSort(list) {
  i = 0;
  smallest = 0;
  while (i < list.length - 1) {
    smallest = list[i];
    let j = i + 1;
    while (j < list.length) {
      if (list[j] < smallest) {
        smallest = list[j];
        [list[i], list[j]] = [list[j], list[i]];
      }
      j++;
    }
    i++;
  }

  return list;
}

const list = [7, 2, 4, 9, 2, 1, 0];

console.log(selectionSort(list));
