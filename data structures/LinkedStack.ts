import LinkedList from './LinkedList';

class LinkedStack<T> {
  #list: LinkedList<T> = null;

  constructor() {
    this.#list = new LinkedList();
  }

  push(item: T): LinkedList<T> {
    this.#list.addFirst(item);
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
}

const stack: LinkedStack<number> = new LinkedStack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log(stack.toArray());
