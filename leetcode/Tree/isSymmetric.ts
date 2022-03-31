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

function isSymmetric(root: TreeNode | null): boolean {
  if (root === null) return true;
  const stack: TreeNode[][] = [[root.left, root.right]];

  while (stack.length !== 0) {
    const [left, right] = stack.pop();
    if (!left && !right) continue;
    if (!left || !right) return false;
    if (left.val === right.val) {
      stack.push([left.left, right.right]);
      stack.push([left.right, right.left]);
    } else {
      return false;
    }
  }

  return true;
}

// function isMirror(left: TreeNode, right: TreeNode) {
//   if (!left && !right) return true;
//   if (!left || !right) return false;

//   if (left.val === right.val) {
//     const outpair = isMirror(left.left, right.right);
//     const inpair = isMirror(left.right, right.left);

//     return outpair && inpair;
//   }

//   return false;
// }

const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4, null, null), new TreeNode(3, null, null)),
  new TreeNode(2, new TreeNode(3, null, null), new TreeNode(4, null, null))
);

console.log(isSymmetric(root));
