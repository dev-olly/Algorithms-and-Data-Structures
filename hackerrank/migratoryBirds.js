function migratoryBirds(arr) {
  // Write your code here
  const occurrence = new Array(arr.length).fill(0);

  for (let i = 0; i < arr.length; i++) {
    occurrence[arr[i]]++;
  }

  let smallestId = 0;
  let max = 0;

  for (let i = 0; i < occurrence.length; i++) {
    if (occurrence[i] > max) {
      max = occurrence[i];
      smallestId = i;
    }
  }

  return smallestId;
}

const arr = [1, 1, 2, 2, 3];

console.log(migratoryBirds(arr));
