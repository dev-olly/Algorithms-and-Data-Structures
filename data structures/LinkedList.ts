interface ILinkedList<T> {
  head: LinkedListNode<T>;
  count: number;
  isEmpty(): boolean;
  size(): number;
  insert(data: T): LinkedListNode<T>;
  traverse(): void;
}
class LinkedList<T> implements ILinkedList<T> {
  public head: LinkedListNode<T> = null;
  public count: number = 0;

  constructor() {}

  isEmpty(): boolean {
    return this.head === null;
  }

  insert(data: T): LinkedListNode<T> {
    const node = new LinkedListNode(data);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.count++;
    return node;
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
linked.insert(1);
linked.insert(2);
linked.insert(3);
linked.traverse();
console.log(linked.isEmpty());
console.log(linked.size());
