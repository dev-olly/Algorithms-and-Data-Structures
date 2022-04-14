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

// First version
// function searchBST(root: TreeNode | null, val: number): TreeNode | null {
//   if (root === null) return null;
//   if (root.val === val) return root;
//   return searchBST(root.left, val) || searchBST(root.right, val);
// }

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (root === null) return null;
  if (root.val === val) return root;
  if (root.val > val) return searchBST(root.left, val);
  if (root.val < val) return searchBST(root.right, val);
}

const root = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1, null), new TreeNode(3, null)),
  new TreeNode(7, null, null)
);

console.log(searchBST(root, 2));
