function matchingStrings(strings, queries) {
  // Write your code here
  const map = new Map();
  const output = new Array(queries.length).fill(0);

  for (let i = 0; i < strings.length; i++) {
    if (map.has(strings[i])) {
      map.set(strings[i], map.get(strings[i]) + 1);
    } else {
      map.set(strings[i], 1);
    }
  }

  for (let i = 0; i < queries.length; i++) {
    if (map.has(queries[i])) {
      output[i] = map.get(queries[i]);
    }
  }

  return output;
}

const strings = ['ab', 'ab', 'abc'];
const queries = ['ab', 'abc', 'bc'];

console.log(matchingStrings(strings, queries));
