class HashMap {
  map = [];
  constructor() {}

  put(key: number, value: number): void {
    for (let i: number = 0; i < this.map.length; i++) {
      if (key === this.map[i][0]) {
        this.map[i][1] = value;
        return;
      }
    }

    this.map.push([key, value]);
  }

  get(key: number): number {
    for (let i: number = 0; i < this.map.length; i++) {
      if (key === this.map[i][0]) {
        return this.map[i][1];
      }
    }
    return -1;
  }

  remove(key: number): void {
    for (let i: number = 0; i < this.map.length; i++) {
      if (key === this.map[i][0]) {
        this.map.splice(i, 1);
      }
    }
  }
}
