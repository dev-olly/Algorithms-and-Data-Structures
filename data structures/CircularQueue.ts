class MyCircularQueue {
  list: number[];
  head: number = -1;
  tail: number = -1;
  k: number;
  constructor(k: number) {
    this.list = new Array(k).fill(null);
    this.k = k;
  }

  enQueue(value: number): boolean {
    if (this.tail < 0 && this.head < 0) {
      this.tail++;
      this.head++;
      this.list[this.tail] = value;
      return true;
    }

    const tail = (this.tail + 1) % this.k;
    if (tail === this.head && this.list[this.head] !== null) {
      return false;
    }
    this.list[tail] = value;
    this.tail = tail;
    return true;
  }

  deQueue(): boolean {
    if (this.head < 0) return false;
    if (this.list[this.head] === null) {
      return false;
    }
    this.list[this.head] = null;
    this.head = (this.head + 1) % this.k;
    return true;
  }

  Front(): number {
    if (this.head < 0) return -1;
    if (this.list[this.head] === null) return -1;
    return this.list[this.head];
  }

  Rear(): number {
    if (this.head < 0) return -1;
    if (this.list[this.tail] === null) return -1;
    return this.list[this.tail];
  }

  isEmpty(): boolean {
    if (this.head < 0) return true;
    for (let i: number = 0; i < this.list.length; i++) {
      if (this.list[i] !== null) return false;
    }

    return true;
  }

  isFull(): boolean {
    for (let i: number = 0; i < this.list.length; i++) {
      if (this.list[i] === null) return false;
    }

    return true;
  }
}

const queue = new MyCircularQueue(3);
console.log(queue.isEmpty());

queue.enQueue(1);
queue.enQueue(2);
queue.enQueue(3);
queue.enQueue(4);
console.log(queue.deQueue());

console.log('rear is', queue.Rear());
console.log(queue.Front());

console.log(queue.list);

// console.log(queue.isFull());

// console.log(queue.enQueue(4));

// console.log(queue.Front());

// console.log(queue.list);
