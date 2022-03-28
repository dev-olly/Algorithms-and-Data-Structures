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

function maxDepth(root: TreeNode | null, depth = 1): number {
  if (root === null) return 0;
  let answer = 0;

  if (!root.left && !root.right) {
    answer = Math.max(answer, depth);
    return answer;
  }

  let left_height = maxDepth(root.left, depth + 1);
  let right_height = maxDepth(root.right, depth + 1);

  return Math.max(left_height, right_height);
}

const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4, null, null), new TreeNode(5, null, null)),
  new TreeNode(3, null, null)
);

console.log(maxDepth(root));
