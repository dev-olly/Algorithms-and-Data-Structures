// Array based implementation of Stack

interface IStack<T> {
  arr: T[];
  isEmpty(): boolean;
  push(T): T[];
  pop(T): T[];
  size(): number;
}
class Stack<T> implements IStack<T> {
  arr: T[];
  constructor(arr: T[]) {
    this.arr = arr;
  }
  isEmpty(): boolean {
    return this.arr.length === 0;
  }
  push(item: T): T[] {
    this.arr.push(item);
    return this.arr;
  }
  pop(): T[] {
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
