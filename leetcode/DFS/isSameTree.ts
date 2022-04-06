function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

const p = new TreeNode(
  1,
  new TreeNode(2, null, null),
  new TreeNode(3, null, null)
);

const q = new TreeNode(
  1,
  new TreeNode(2, null, null),
  new TreeNode(3, null, null)
);
