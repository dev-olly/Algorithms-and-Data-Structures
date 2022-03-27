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

function minDepth(root: TreeNode | null): number {
  if (root === null) return 0;
  if (root.left === null && root.right === null) return 1;

  let height = Number.MAX_SAFE_INTEGER;
  if (root.left) {
    height = Math.min(minDepth(root.left), height);

    console.log(height, 'left', root.left.val);
  }
  if (root.right) {
    height = Math.min(minDepth(root.right), height);
    console.log(height, 'right', root.right.val);
  }

  return height + 1;
}

const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4, null, null), new TreeNode(5, null, null)),
  new TreeNode(3, null, null)
);

console.log(minDepth(root));
