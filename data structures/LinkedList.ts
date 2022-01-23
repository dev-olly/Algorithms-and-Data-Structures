interface ILinkedList<T> {
  head: LinkedListNode<T>;
  tail: LinkedListNode<T>;
  count: number;
  isEmpty(): boolean;
  size(): number;
  insertAtTheBeginning(data: T): LinkedListNode<T>;
  insertAtTheEnd(data: T): LinkedListNode<T>;
  popHead(): void;
  popTail(): void;
  traverse(): void;
}
class LinkedList<T> implements ILinkedList<T> {
  public head: LinkedListNode<T> = null;
  public tail: LinkedListNode<T> = null;
  public count: number = 0;

  constructor() {}

  isEmpty(): boolean {
    return this.head === null;
  }

  insertAtTheBeginning(data: T): LinkedListNode<T> {
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
  insertAtTheEnd(data: T): LinkedListNode<T> {
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
  popHead(): void {
    this.head = this.head.next;
  }
  popTail(): void {
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
linked.insertAtTheBeginning(2);
linked.insertAtTheBeginning(1);
linked.insertAtTheEnd(3);
linked.insertAtTheEnd(4);
linked.popHead();
linked.popTail();
linked.traverse();
console.log(linked.isEmpty());
console.log(linked.size());
