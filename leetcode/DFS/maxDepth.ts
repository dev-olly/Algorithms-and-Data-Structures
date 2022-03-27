import LinkedList from '../../data structures/LinkedList';

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

function maxDepth(root: TreeNode | null): number {
  if (root === null) return 0;

  const stack: Pair<TreeNode, number>[] = [new Pair(root, 1)];

  let height = 0;

  while (stack.length !== 0) {
    const { key: node, val: currentDepth } = stack.pop();
    if (node.left) stack.push(new Pair(node.left, currentDepth + 1));
    if (node.right) stack.push(new Pair(node.right, currentDepth + 1));
    height = Math.max(height, currentDepth);
  }

  return height;
}
