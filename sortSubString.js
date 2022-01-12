function sortSubString(s, l, h) {
  const substr = s.slice(l, h + 1);

  const a = [...substr].map((a, b) => a.toLocaleString(b));

  console.log(a);
}

const s = 'ooneefspd';
const l = 0;
const h = 8;

console.log(sortSubString(s, l, h));
