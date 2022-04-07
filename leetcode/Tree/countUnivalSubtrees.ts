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

function countUnivalSubtrees(root: TreeNode | null): number {
  let count = [0];
  function dfs(node, count): boolean {
    if (node === null) return true;

    let isLeftUnival = dfs(node.left, count);
    let isRightUnival = dfs(node.right, count);

    if (!isLeftUnival || !isRightUnival) return false;

    if (node.left && node.val !== node.left.val) return false;
    if (node.right && node.val !== node.right.val) return false;

    count[0] += 1;

    return true;
  }

  dfs(root, count);

  return count[0];
}

const root = new TreeNode(
  5,
  new TreeNode(1, new TreeNode(5, null, null), new TreeNode(5, null, null)),
  new TreeNode(5, null, new TreeNode(5, null, null))
);

console.log(countUnivalSubtrees(root));
