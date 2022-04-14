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

// First version
// function searchBST(root: TreeNode | null, val: number): TreeNode | null {
//   if (root === null) return null;
//   if (root.val === val) return root;
//   return searchBST(root.left, val) || searchBST(root.right, val);
// }

// function searchBST(root: TreeNode | null, val: number): TreeNode | null {
//   if (root === null) return null;
//   if (root.val === val) return root;
//   if (root.val > val) return searchBST(root.left, val);
//   if (root.val < val) return searchBST(root.right, val);
// }

// using iteration

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (root === null) return null;
  if (root.val === val) return root;
  const stack: TreeNode[] = [];
  if (root.right) stack.push(root.right);
  if (root.left) stack.push(root.left);

  while (stack.length) {
    const node = stack.pop();
    if (node.val === val) return node;
    if (node.val > val && node.left) stack.push(node.left);
    if (node.val < val && node.right) stack.push(node.right);
  }

  return null;
}

const root = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1, null), new TreeNode(3, null)),
  new TreeNode(7, null, null)
);

console.log(searchBST(root, 2));
