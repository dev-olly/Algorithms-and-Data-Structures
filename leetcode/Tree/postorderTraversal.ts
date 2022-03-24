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

function postorderTraversal(root: TreeNode | null): number[] {
  const stack = [];
  const numbers = [];

  while (stack.length || root) {
    if (root) {
      stack.push(root);
      numbers.unshift(root.val);
      root = root.right;
    } else {
      const tmp = stack.pop();
      root = tmp.left;
    }
  }

  return numbers;
}

const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));

console.log(postorderTraversal(root));
