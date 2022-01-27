class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteMiddle(head: ListNode | null): ListNode | null {
  let length = 0;
  let curr = head;

  while (curr) {
    length += 1;
    curr = curr.next;
  }

  let sentinel = new ListNode(0);
  sentinel.next = head;
  const mid = Math.floor(length / 2);

  let i = 0;

  if (mid === 0) {
    return null;
  }

  while (i != mid) {
    if (mid - i === 1) {
      head.next = head.next.next;
    } else {
      head = head.next;
    }
    i++;
  }

  return sentinel.next;
}

const head = new ListNode(1);

console.log(deleteMiddle(head));
