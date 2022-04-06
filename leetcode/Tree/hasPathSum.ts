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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (root === null) return false;
  const stack: [TreeNode, number][] = [];

  if (root.right) stack.push([root.right, targetSum - root.val]);
  if (root.left) stack.push([root.left, targetSum - root.val]);
  if (root.val === targetSum && !root.left && !root.right) return true;

  while (stack.length !== 0) {
    const [node, sum] = stack.pop();
    const currentSum = sum - node.val;
    if (currentSum === 0 && !node.left && !node.right) return true;
    if (node.right) stack.push([node.right, currentSum]);
    if (node.left) stack.push([node.left, currentSum]);
  }

  return false;
}

const root = new TreeNode(
  1,
  new TreeNode(2, null, null),
  new TreeNode(3, null, null)
);

console.log(hasPathSum(root, 3));
