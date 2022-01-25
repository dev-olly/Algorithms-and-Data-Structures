function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let sentinel = new ListNode(-101);
  let first = list1;
  let second = list2;
  let curr = sentinel;

  while (first !== null && second !== null) {
    if (first.val < second.val) {
      curr.next = first;
      first = first.next;
    } else if (first.val > second.val) {
      curr.next = second;
      second = second.next;
    } else {
      curr.next = first;
      first = first.next;
      curr = curr.next;
      curr.next = second;
      second = second.next;
    }
    curr = curr.next;
  }

  if (first) {
    curr.next = first;
    curr = curr.next;
  }
  if (second) {
    curr.next = second;
    curr = curr.next;
  }

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
