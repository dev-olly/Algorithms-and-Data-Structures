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

function inorderTraversal(root: TreeNode | null): number[] {
  const numbers = [];
  const stack = [];
  let node = root;
  while (stack.length || node !== null) {
    if (node) {
      stack.push(node);
      node = node.left;
    } else {
      const tmp = stack.pop();
      numbers.push(tmp.val);
      node = tmp.right;
    }
  }
  return numbers;
}

const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));

console.log(inorderTraversal(root));
