class Stack {
  arr: number[];
  constructor(arr: number[]) {
    this.arr = arr;
  }
  isEmpty(): boolean {
    return this.arr.length === 0;
  }
  push(item: number): number[] {
    this.arr.push(item);
    return this.arr;
  }
  pop(): number[] {
    this.arr.pop();
    return this.arr;
  }

  size(): number {
    return this.arr.length;
  }
}

const stack = new Stack([1, 2, 3, 4, 5]);
console.log(stack.push(6));
console.log(stack.pop());
console.log(stack.size());
console.log(stack.isEmpty());
