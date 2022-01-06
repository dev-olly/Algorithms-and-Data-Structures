function processData(input) {
  //Enter your code here
  const lines = input.split('\n');
  const answer = [];
  for (let i = 0; i < lines.length; i++) {
    const arr = lines[i].split(';');

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

        answer.push(newString.toLowerCase().trim());
      } else if (arr[1] === 'C') {
        const capIndex = findCapIndex(lowerCaseFirstLetter(arr[2]));

        let newString = arr[2].slice(0, capIndex[0]);

        for (let i = 1; i <= capIndex.length; i++) {
          if (capIndex[i]) {
            newString += ` ${arr[2].slice(capIndex[i - 1], capIndex[i])}`;
          } else {
            newString += ` ${arr[2].slice(capIndex[i - 1])}`;
          }
        }

        answer.push(newString.toLowerCase().trim());
      } else if (arr[1] === 'V') {
        const capIndex = findCapIndex(arr[2]);
        let newString = arr[2].slice(0, capIndex[0]);
        for (let i = 1; i <= capIndex.length; i++) {
          if (capIndex[i]) {
            newString += ` ${arr[2].slice(capIndex[i - 1], capIndex[i])}`;
          } else {
            newString += ` ${arr[2].slice(capIndex[i - 1])}`;
          }
        }

        answer.push(newString.toLowerCase().trim());
      }
    } else if (arr[0] === 'C') {
      if (arr[1] === 'V') {
        const spacePositions = findSpaceWithinString(arr[2]);
        let newString = arr[2].slice(0, spacePositions[0]);

        for (let i = 1; i <= spacePositions.length; i++) {
          if (spacePositions[i]) {
            const cap = arr[2].slice(
              spacePositions[i - 1] + 1,
              spacePositions[i]
            );
            newString += `${cap}`;
          } else {
            const cap = capitalizeFirstLetter(
              arr[2].slice(spacePositions[i - 1] + 1)
            );
            newString += `${cap}`;
          }
        }
        answer.push(newString.trim());
      } else if (arr[1] === 'C') {
        const spacePositions = findSpaceWithinString(arr[2]);
        let newString = capitalizeFirstLetter(
          arr[2].slice(0, spacePositions[0])
        );

        for (let i = 1; i <= spacePositions.length; i++) {
          if (spacePositions[i]) {
            const cap = arr[2].slice(
              spacePositions[i - 1] + 1,
              spacePositions[i]
            );
            newString += `${cap}`;
          } else {
            const cap = capitalizeFirstLetter(
              arr[2].slice(spacePositions[i - 1] + 1)
            );
            newString += `${cap}`;
          }
        }
        answer.push(newString.trim());
      } else if (arr[1] === 'M') {
        const spacePositions = findSpaceWithinString(arr[2]);
        let newString = arr[2].slice(0, spacePositions[0]);

        for (let i = 1; i <= spacePositions.length; i++) {
          if (spacePositions[i]) {
            const cap = capitalizeFirstLetter(
              arr[2].slice(spacePositions[i - 1] + 1, spacePositions[i])
            );
            newString += `${cap}`;
          } else {
            const cap = capitalizeFirstLetter(
              arr[2].slice(spacePositions[i - 1] + 1)
            );
            newString += `${cap}`;
          }
        }
        answer.push(`${newString}()`.trim());
      }
    }
  }

  console.log(answer.join('\n').trim());
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

function capitalizeFirstLetter(s) {
  s = s.charAt(0).toUpperCase() + s.slice(1);
  return s;
}

function lowerCaseFirstLetter(s) {
  s = s.charAt(0).toLowerCase() + s.slice(1);
  return s;
}

// console.log(capitalizeFirstLetter('phone'));

// const s = 'S;M;plasticCup()';
// const s = 'C;V;mobile phone';
// const s = 'C;C;coffee machine';
const s = 'S;V;iPad\nC;M;mouse pad\nC;C;code swarm\nS;C;OrangeHighlighter';
// const s = 'C;M;mouse pad';
// const s = 'S;V;iPad';

processData(s);
