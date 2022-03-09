import LinkedList from './LinkedList';

class Queue<T> {
  #list: LinkedList<T>;
  constructor() {
    this.#list = new LinkedList();
  }

  top(): T {
    return this.#list.head.value;
  }

  bottom(): T {
    return this.#list.tail.value;
  }
  push(item: T): LinkedList<T> {
    this.#list.addLast(item);
    return this.#list;
  }

  pop(): LinkedList<T> {
    this.#list.popFirst();
    return this.#list;
  }

  isEmpty(): boolean {
    return this.#list.isEmpty();
  }

  toArray(): T[] {
    return this.#list.toArray();
  }

  size(): number {
    return this.#list.size();
  }
}

export default Queue;
