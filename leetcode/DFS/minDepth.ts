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

class Pair<T, S> {
  key: T;
  val: S;

  constructor(key: T, val: S) {
    this.key = key;
    this.val = val;
  }
}

function minDepth(root: TreeNode | null): number {
  if (root === null) return 0;

  const stack: Pair<TreeNode, number>[] = [new Pair(root, 1)];
  let height = Number.MAX_SAFE_INTEGER;
  while (stack.length !== 0) {
    const item = stack.pop();

    const root = item.key;
    const currentHeight = item.val;
    if (!root.left && !root.right) {
      height = Math.min(height, currentHeight);
    }
    if (root.left) {
      stack.push(new Pair(root.left, currentHeight + 1));
    }

    if (root.right) {
      stack.push(new Pair(root.right, currentHeight + 1));
    }
  }
  return height;
}

const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4, null, null), new TreeNode(5, null, null)),
  new TreeNode(3, null, null)
);

console.log(minDepth(root));
