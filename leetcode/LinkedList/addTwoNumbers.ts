class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const sentinel = new ListNode(0);
  let rem = 0;
  let curr = sentinel;

  while (l1 && l2) {
    let sum = l1.val + l2.val + rem;
    rem = sum > 9 ? Math.floor(sum / 10) : 0;
    sum = sum > 9 ? sum % 10 : sum;

    l1.val = sum;
    curr.next = l1;
    curr = curr.next;
    l1 = l1.next;
    l2 = l2.next;
  }
  while (l1) {
    let sum = l1.val + rem;
    rem = 0;
    rem = sum > 9 ? Math.floor(sum / 10) : 0;
    sum = sum > 9 ? sum % 10 : sum;

    l1.val = sum;
    curr.next = l1;
    curr = curr.next;
    l1 = l1.next;
  }
  while (l2) {
    let sum = l2.val + rem;
    rem = sum > 9 ? Math.floor(sum / 10) : 0;
    sum = sum > 9 ? sum % 10 : sum;
    l2.val = sum;
    curr.next = l2;
    curr = curr.next;
    l2 = l2.next;
  }

  if (rem) {
    curr.next = new ListNode(rem);
    curr = curr.next;
  }

  return sentinel.next;
}

const list1 = new ListNode(9, new ListNode(9));
const list2 = new ListNode(9, new ListNode(9));

console.log(addTwoNumbers(list1, list2));
