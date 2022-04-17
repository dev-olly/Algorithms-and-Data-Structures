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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (preorder.length !== inorder.length) return null;

  const map = new Map<number, number>();

  for (let i: number = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }

  const recursive = (start: number, end: number): TreeNode | null => {
    if (start > end) return null;

    const root = new TreeNode(preorder.shift() as number);
    root.left = recursive(start, map.get(root.val) - 1);

    root.right = recursive(map.get(root.val) + 1, end);
    return root;
  };

  return recursive(0, inorder.length - 1);
}

const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];

console.log(buildTree(preorder, inorder));
