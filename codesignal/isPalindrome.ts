function solution(inputString: string): boolean {
  if (inputString.length <= 1) return true;
  let i = 0;
  let j = inputString.length - 1;
  while (i < j) {
    if (inputString.charAt(i) !== inputString.charAt(j)) return false;
    i++;
    j--;
  }

  return true;
}
