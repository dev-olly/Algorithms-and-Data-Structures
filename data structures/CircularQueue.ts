class MyCircularQueue {
  list: number[];
  head: number = 0;
  tail: number = 0;
  k: number;
  constructor(k: number) {
    this.list = new Array(k).fill(null);
    this.k = k;
  }

  enQueue(value: number): boolean {
    if (this.tail === this.head && this.list[this.head] !== null) {
      return false;
    }
    this.list[this.tail] = value;
    this.tail = (this.tail + 1) % this.k;
    return true;
  }

  deQueue(): boolean {
    if (this.list[this.head] === null) {
      return false;
    }
    this.list[this.head] = null;
    this.head = (this.head + 1) % this.k;
    return true;
  }

  Front(): number {
    if (this.list[this.head] === null) return -1;
    return this.list[this.head];
  }

  Rear(): number {
    if (this.list[this.tail] === null) return -1;
    return this.list[this.tail];
  }

  isEmpty(): boolean {
    return (
      this.list[this.tail] == this.list[this.head] &&
      this.list[this.tail] === null
    );
  }

  isFull(): boolean {
    return (
      this.list[this.tail] == this.list[this.head] &&
      this.list[this.tail] !== null
    );
  }
}

const queue = new MyCircularQueue(3);
console.log(queue.isEmpty());

queue.enQueue(1);
queue.enQueue(2);
queue.enQueue(3);

console.log(queue.isFull());

// console.log(queue.enQueue(4));

// console.log(queue.deQueue());

// console.log(queue.Front());

// console.log(queue.list);
