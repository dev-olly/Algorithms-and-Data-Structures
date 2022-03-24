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

function levelOrder(root: TreeNode | null): number[][] {
  const answers: number[][] = [];

  const queue = new LinkedList<TreeNode>();
  if (root) queue.addLast(root);

  while (!queue.isEmpty()) {
    const size = queue.size();
    const answer = [];

    for (let i: number = 0; i < size; i++) {
      const node = queue.popFirst();
      if (node && node.left) queue.addLast(node.left);
      if (node && node.right) queue.addLast(node.right);
      answer.push(node.val);
    }

    answers.push(answer);
  }

  return answers;
}

// BFS is like a step
