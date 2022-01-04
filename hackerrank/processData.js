function processData(input) {
  //Enter your code here
  const arr = input.split(';');

  if (arr[0] === 'S') {
    if (arr[1] === 'M') {
      const capIndex = findCapIndex(arr[2]);
      const removeString = removeMethodBracket(arr[2]);
      // return removeString;
      let newString = removeString.slice(0, capIndex[0]);
      for (let i = 1; i <= capIndex.length; i++) {
        if (capIndex[i]) {
          newString += ` ${removeString.slice(capIndex[i - 1], capIndex[i])}`;
        } else {
          newString += ` ${removeString.slice(capIndex[i - 1])}`;
        }
      }

      return newString.toLowerCase();
    }
  } else if (arr[0] === 'C') {
    if (arr[1] === 'V') {
    }
  }
}

function findCapIndex(s) {
  const positions = [];
  for (var i = 0; i < s.length; i++) {
    if (s[i].match(/[A-Z]/) != null) {
      positions.push(i);
    }
  }

  return positions;
}

function removeMethodBracket(s) {
  for (var i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      return s.slice(0, i);
    }
  }
}

function findSpaceWithinString(s) {
  const positions = [];
  for (var i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      positions.push(i);
    }
  }

  return positions;
}

// const s = 'S;M;plasticCup()';
const s = 'C;V;mobile phone';

console.log(processData(s));
