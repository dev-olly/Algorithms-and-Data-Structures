class HashSet {
  set: number[] = [];
  constructor() {}

  add(key: number): void {
    if (!this.contains(key)) {
      this.set.push(key);
    }
  }

  remove(key: number): void {
    if (this.contains(key)) {
      const index = this.set.indexOf(key);
      this.set.splice(index, 1);
    }
  }

  contains(key: number): boolean {
    const index = this.set.indexOf(key);
    return index >= 0;
  }
}

const list = new HashSet();

list.add(1);
list.add(2);
list.add(3);

list.remove(2);

console.log(list.contains(1));
