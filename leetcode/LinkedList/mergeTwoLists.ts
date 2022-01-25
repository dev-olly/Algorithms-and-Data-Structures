function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let sentinel = new ListNode(-101);
  let curr = sentinel;

  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else if (list1.val > list2.val) {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }

  curr.next = list1 === null ? list2 : list1;

  return sentinel.next;
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
