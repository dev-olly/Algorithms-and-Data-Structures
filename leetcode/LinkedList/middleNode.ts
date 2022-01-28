class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// My approach
function middleNode(head: ListNode | null): ListNode | null {
  let length = 0;
  let curr = head;
  while (curr) {
    length += 1;
    curr = curr.next;
  }
  const mid = Math.floor(length / 2);
  let i = 0;
  while (i != mid) {
    head = head.next;
    i++;
  }

  return head;
}

// Leetcode approach 1
function middleNode(head: ListNode | null): ListNode | null {
  return head;
}
const head = new ListNode(1, new ListNode(2, new ListNode(3, null)));

console.log(middleNode(head));
