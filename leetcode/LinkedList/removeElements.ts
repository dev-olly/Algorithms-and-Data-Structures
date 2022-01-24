function removeElements(head: ListNode | null, val: number): ListNode | null {
  if (!head) {
    return null;
  }
  let node = head;
  let sentinel = new ListNode(0);
  sentinel.next = head;

  let prev = sentinel;

  while (node) {
    if (node.val === val) {
      // in between
      prev.next = node.next;
      node = node.next;
    } else {
      prev = node;
      node = node.next;
    }
  }

  return sentinel.next;
}
