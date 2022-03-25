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

function minDepth(root: TreeNode | null): number {
  let height = 0;

  const queue = new LinkedList<TreeNode>();
  if (!root) return height;
  queue.addLast(root);
  while (!queue.isEmpty()) {
    const size = queue.size();
    height++;

    for (let i: number = 0; i < size; i++) {
      const node = queue.popFirst();

      if (!node.left && !node.right) return height;
      if (node.left) queue.addLast(node.left);
      if (node.right) queue.addLast(node.right);
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
