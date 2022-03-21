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

function preorderTraversal(root: TreeNode | null): number[] {
  //   console.log(root);
  const numbers = [];
  traverse(root, numbers);
  return numbers;
}

function traverse(root: TreeNode | null, numbers) {
  if (root === null) return;
  numbers.push(root.val);
  traverse(root.left, numbers);
  traverse(root.right, numbers);
}

const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));

console.log(preorderTraversal(root));
