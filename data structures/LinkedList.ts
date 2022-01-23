interface ILinkedList<T> {
  head: LinkedListNode<T>;
  tail: LinkedListNode<T>;
  count: number;
  isEmpty(): boolean;
  size(): number;
  addFirst(data: T): LinkedListNode<T>;
  addLast(data: T): LinkedListNode<T>;
  popFirst(): void;
  popLast(): void;
  traverse(): void;
  indexOf(data: T): number;
  toArray(): T[];
  contains(data: T): boolean;
}
class LinkedList<T> implements ILinkedList<T> {
  public head: LinkedListNode<T> = null;
  public tail: LinkedListNode<T> = null;
  public count: number = 0;

  constructor() {}

  isEmpty(): boolean {
    return this.head === null;
  }

  addFirst(data: T): LinkedListNode<T> {
    const node = new LinkedListNode(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.count++;
    return node;
  }
  addLast(data: T): LinkedListNode<T> {
    const node = new LinkedListNode(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.count++;
    return node;
  }
  popFirst(): void {
    this.head = this.head.next;
  }
  popLast(): void {
    let node = this.head;
    while (node.next.next) {
      node = node.next;
    }
    this.tail = node;
    this.tail.next = null;
  }
  size(): number {
    return this.count;
  }
  traverse(): void {
    let node = this.head;
    while (node !== null) {
      console.log(node);
      node = node.next;
    }
  }
  indexOf(data: T): number {
    let index = -1;
    let node = this.head;
    while (node) {
      index++;
      if (node.value === data) {
        return index;
      }
      node = node.next;
    }
    return -1;
  }
  toArray(): T[] {
    return [];
  }
  contains(data: T): boolean {
    return true;
  }
}

class LinkedListNode<T> {
  value: T;
  next: LinkedListNode<T> | null = null;
  constructor(value: T, next: LinkedListNode<T> = null) {
    this.value = value;
    this.next = next;
  }
}

const linked: LinkedList<number> = new LinkedList();

console.log(linked.isEmpty());
linked.addFirst(2);
linked.addFirst(1);
linked.addLast(3);
linked.addLast(4);
// linked.popFirst();
// linked.popLast();
// linked.traverse();
console.log(linked.indexOf(3));
console.log(linked.isEmpty());
console.log(linked.size());
