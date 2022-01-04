function breakingRecords(scores) {
  // Write your code here
  let minScore = scores[0];
  let maxScore = scores[0];
  let min = 0;
  let max = 0;

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > maxScore) {
      maxScore = scores[i];
      max++;
    } else if (scores[i] < minScore) {
      minScore = scores[i];
      min++;
    }
  }

  return [max, min];
}

const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];

console.log(breakingRecords(scores));
