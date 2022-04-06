class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;
  const stack: [TreeNode | null, TreeNode | null][] = [[p, q]];

  while (stack.length !== 0) {
    const [pNode, qNode] = stack.pop();
    if (pNode === null || qNode === null) return false;
    if (pNode.val !== qNode.val) return false;
    if (pNode.right && qNode.right) stack.push([pNode.right, qNode.right]);
    else if (pNode.right || qNode.right) return false;
    if (pNode.left && qNode.left) stack.push([pNode.left, qNode.left]);
    else if (pNode.left || qNode.left) return false;
  }
  return true;
}

const p = new TreeNode(1, null, null);

const q = new TreeNode(1, null, new TreeNode(2, null, null));

console.log(isSameTree(p, q));
