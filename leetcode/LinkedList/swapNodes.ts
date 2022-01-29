class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function swapNodes(head: ListNode | null, k: number): ListNode | null {
  let fast = head,
    slow = head,
    i = 1,
    firstnode = null;

  while (i < k && fast.next) {
    i++;
    fast = fast.next;
  }

  firstnode = fast;

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  const temp = slow.val;
  slow.val = firstnode.val;
  firstnode.val = temp;

  return head;
}

const list1 = new ListNode(1, new ListNode(2, new ListNode(3, null)));

console.log(swapNodes(list1, 1));
