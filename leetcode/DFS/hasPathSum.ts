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
  const currentSum = targetSum - root.val;
  if (currentSum === 0 && !root.left && !root.right) return true;
  return (
    hasPathSum(root.left, currentSum) || hasPathSum(root.right, currentSum)
  );
}

function dfs(root: TreeNode | null): number[] {
  if (root === null) return;
  console.log(root.val);
  dfs(root.left);

  let left_sum;

  dfs(root.right);

  let right_sum;

  return [left_sum, right_sum];
}

const root = new TreeNode(
  1,
  new TreeNode(2, null, null),
  new TreeNode(3, null, null)
);

console.log(hasPathSum(root, 100));
