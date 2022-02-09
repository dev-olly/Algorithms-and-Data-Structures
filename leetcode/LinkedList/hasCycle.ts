class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function hasCycle(head: ListNode | null): boolean {
    const sentinel = new ListNode(-1);
    sentinel.next = head;
    let slow  = sentinel
    let fast = sentinel

    while(slow.val !== fast.val && fast) {
        slow = slow.next
        fast = 
    }
}

const head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, null)))
);

console.log(hasCycle(head));

