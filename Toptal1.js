function solution(T, R) {
  // write your code in JavaScript (Node.js 8.9.4)
  const allGroups = [];
  const allAlphabets = "abcdefghijklmnopqrstuvwxyz";
  for (const group of T) {
    let eachGroup = [];
    const lastletter = group[group.length - 1];
    if (!allGroups.flat().includes(group)) {
      if (allAlphabets.includes(lastletter)) {
        const testGroup = group.slice(0, group.length - 2);
        eachGroup = T.filter(
          (item) => item.slice(0, item.length - 2) === testGroup
        );
        allGroups.push(eachGroup);
      } else {
        allGroups.push([group]);
      }
    }
  } // ------------------- O(N)

  const groupNumber = allGroups.length;
  let successGroup = 0;

  for (let i = 0; i < T.length; i++) {
    // ------------------- O(N)
    if (R[i] === "OK") {
      for (const group of allGroups) {
        // ------------------- O(N)
        if (group.includes(T[i])) {
          if (group.length === 1) {
            successGroup++;
          } else {
            if (group[0] === T[i]) {
              let innerSuccess = 0;
              for (const item of group) {
                const itemIndex = T.findIndex((j) => j === item);
                // console.log(itemIndex);

                if (R[itemIndex] === "OK") {
                  innerSuccess++;
                }
              }
              if (innerSuccess === group.length) {
                successGroup++;
              }
            }
          }
        }
      }
    }
  }

  const success = successGroup * 100;
  const score = success / groupNumber;
  console.log(score);

  return parseInt(score);
}

const T = ["test0", "test1a", "test1b"];
const R = ["OK", "OK", "a"];

console.log(solution(T, R));
