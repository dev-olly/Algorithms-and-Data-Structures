function simplifyPath(path: string): string {
  let stack: string[] = [];
  //   splitted array
  const splited = path.split('/');
  console.log(splited);

  for (let i: number = 0; i < splited.length; i++) {
    if (splited[i] === '..') {
      stack.pop();
      continue;
    } else if (splited[i] === '' || splited[i] === '.') continue;

    stack.push(splited[i]);
  }

  return `/${stack.join('/')}`;
}

// const path: string = '/home/.a/b/../c/';

const path: string = '/a/./b/../../c/';

console.log(simplifyPath(path));
