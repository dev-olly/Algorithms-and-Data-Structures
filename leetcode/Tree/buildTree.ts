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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if (inorder.length !== postorder.length) return null;
  const map = new Map<number, number>();

  for (let i: number = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }

  const recursive = (start: number, end: number): TreeNode | null => {
    if (start > end) return null;
    const root = new TreeNode(postorder.pop() as number);
    root.right = recursive(map.get(root.val) + 1, end);
    root.left = recursive(start, map.get(root.val) - 1);
    return root;
  };

  return recursive(0, inorder.length - 1);
}

const inorder = [9, 3, 15, 20, 7];
const postorder = [9, 15, 7, 20, 3];

console.log(buildTree(inorder, postorder));
