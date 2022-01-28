class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let length = 0;
  let curr = head;
  while (curr) {
    length += 1;
    curr = curr.next;
  }
  let sentinel = new ListNode(-1);
  sentinel.next = head;
  curr = sentinel;
  const num = length - n;
  let i = 0;

  while (i < num) {
    curr = curr.next;
    i++;
  }
  curr.next = curr.next.next;
  return sentinel.next;
}

const head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null))))
);

// const head = new ListNode(1);

console.log(removeNthFromEnd(head, 2));
