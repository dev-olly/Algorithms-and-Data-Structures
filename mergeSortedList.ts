function mergeList(arr1: number[], arr2: number[]): number[] {
  const list: number[] = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      list.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      list.push(arr1[j]);
      j++;
    } else {
      list.push(arr1[i], arr1[j]);
      i++;
      j++;
    }
  }

  while (i < arr1.length) {
    list.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    list.push(arr2[j]);
    j++;
  }

  return list;
}

const list1: number[] = [1, 3, 4];
const list2: number[] = [1, 2, 5];

console.log(mergeList(list1, list2));
