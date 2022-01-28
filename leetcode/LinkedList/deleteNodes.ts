function deleteNodes(
  head: ListNode | null,
  m: number,
  n: number
): ListNode | null {
  let i = 1;
  let j = 1;
  let curr = head;
  let save = null;

  while (curr) {
    if (i <= m) {
      save = curr;
    } else if (j === m + n) {
      save.next = curr.next;
      i = 0;
      j = 0;
    }
    i++;
    j++;
    curr = curr.next;
  }
  save.next = null;

  return head;
}
