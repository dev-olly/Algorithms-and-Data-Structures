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

function maxDepth(root: TreeNode | null): number {
  if (root === null) return 0;

  const queue: LinkedList<TreeNode> = new LinkedList();

  queue.addLast(root);
  let height = 0;
  while (!queue.isEmpty()) {
    const size = queue.size();
    height++;

    for (let i: number = 0; i < size; i++) {
      const node = queue.popFirst();
      if (node.left) queue.addLast(node.left);
      if (node.right) queue.addLast(node.right);
    }
  }

  return height;
}
