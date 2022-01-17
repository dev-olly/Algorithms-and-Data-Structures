class Stack {
  constructor(arr) {
    this.arr = arr;
  }
  isEmpty() {
    return this.arr.length === 0;
  }
  push(item) {
    this.arr.push(item);
    return this.arr;
  }
  pop() {
    this.arr.pop();
    return this.arr;
  }

  size() {
    return this.arr.length;
  }
}

const stack = new Stack([1, 2, 3, 4, 5]);
console.log(stack.push(6));
console.log(stack.pop());
console.log(stack.size());
console.log(stack.isEmpty());
