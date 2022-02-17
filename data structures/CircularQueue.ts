class MyCircularQueue {
  list: number[];
  head: number = -1;
  tail: number = -1;
  k: number;
  constructor(k: number) {
    this.list = new Array(k).fill(null);
    this.k = k;
  }

  enQueue(value: number): boolean {}

  deQueue(): boolean {}

  Front(): number {}

  Rear(): number {}

  isEmpty(): boolean {}

  isFull(): boolean {}
}

const queue = new MyCircularQueue(3);
// console.log(queue.isEmpty());

queue.enQueue(1);
queue.enQueue(2);
queue.enQueue(3);
queue.enQueue(4);

console.log('rear is', queue.Rear());
console.log(queue.list);

// console.log(queue.isFull());

// console.log(queue.enQueue(4));

// console.log(queue.deQueue());

// console.log(queue.Front());

// console.log(queue.list);
