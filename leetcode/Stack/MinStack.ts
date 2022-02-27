class MinStack {
  list: number[];
  constructor() {
    this.list = [];
  }

  push(val: number): void {
    this.list.push(val);
  }

  pop(): void {
    this.list.pop();
  }

  top(): number {
    return this.list[this.list.length - 1];
  }

  getMin(): number {
    let min = Number.MAX_VALUE;

    for (let i: number = 0; i < this.list.length; i++) {
      min = Math.min(min, this.list[i]);
    }

    return min;
  }
}
