class MaxStack {
  stack: number[];
  maxIndex: number;
  constructor() {
    this.stack = [];
  }

  push(x: number): void {
    this.stack.push(x);
  }

  pop(): number {
    return this.stack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  peekMax(): number {
    let max = null;
    for (let i: number = this.stack.length; i >= 0; i--) {
      if (this.stack[i] > max) {
        this.maxIndex = i;
        max = this.stack[i];
      }
    }
    return max;
  }

  popMax(): number {
    const max = this.peekMax();
    this.stack.splice(this.maxIndex, 1);
    return max;
  }
}
