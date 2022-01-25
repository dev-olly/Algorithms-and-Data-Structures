function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const newHead: ListNode = new ListNode();
  let curr = newHead;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  curr.next = l1 || l2;
  return newHead.next;
  // T.C: O(M + N)
  // S.C: O(1)
}

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const list1 = [1, 2, 4];
const list2 = [1, 3, 4];

console.log(mergeTwoLists(list1, list2));
