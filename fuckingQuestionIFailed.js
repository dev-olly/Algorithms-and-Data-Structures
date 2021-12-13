const obj = {
  id11: 900,
  id22: 8000,
  id21: 8000,
  id34: 7600,
  id1: 7600,
};

const sortable = Object.entries(obj)
  .sort(([i, a], [j, b]) => {
    if (b - a == 0) {
      // return j < i;
      // console.log(i.localeCompare(j));

      return i.localeCompare(j);
    }

    return b - a;
  })
  .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

console.log(sortable);

// sort on basis of value and  alphabetically if values are the same

// Also permutation
