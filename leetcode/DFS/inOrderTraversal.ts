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

function inorderTraversal(root: TreeNode | null): number[] {
  const numbers = [];
  traverse(root, numbers);
  return numbers;
}

function traverse(node, numbers) {
  if (node === null) return;
  traverse(node.left, numbers);
  numbers.push(node.val);
  traverse(node.right, numbers);
}

const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));

console.log(inorderTraversal(root));
