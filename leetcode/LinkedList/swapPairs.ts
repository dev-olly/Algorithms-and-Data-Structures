class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function swapPairs(head: ListNode | null): ListNode | null {
  const sentinel = new ListNode(-1);
  sentinel.next = head;
  let first,
    second = null;
  let curr = sentinel;

  while (curr.next && curr.next.next) {
    first = curr.next;
    second = curr.next.next;

    curr.next = second;
    first.next = second.next;
    second.next = first;
    curr = curr.next.next;
  }

  return sentinel.next;
}

const list1 = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, null)))
);

console.log(swapPairs(list1));
