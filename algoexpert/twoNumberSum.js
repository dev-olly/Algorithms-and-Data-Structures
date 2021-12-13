// function twoNumberSum(array, targetSum) {
//   const result = [];

//   for (let i = 0; i < array.length; i++) {
//     if (result.length === 2) break;

//     for (let j = 0; j < array.length; j++) {
//       if (i == j) continue;

//       if (array[i] + array[j] === targetSum) {
//         result.push(array[i], array[j]);
//         break;
//       }
//     }
//   }

//   return result;
// }

function twoNumberSum(array, target) {
  const result = [];
  const obj = new Map();
  for (let i = 0; i < array.length; i++) {
    if (obj.get(array[i])) {
      result.push(array[i]);
      result.push(obj.get(array[i]));
      return result;
    }
    const diff = target - array[i];
    obj.set(diff, array[i]);
  }
  return [];
}

const arr = [4, 1];
const target = 10;

console.log(twoNumberSum(arr, target));
