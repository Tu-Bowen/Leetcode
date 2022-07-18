/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var mirrorTree = function(root) {
     let t=root.left
     root.left=root.right
     root.right=t
     mirrorTree(root.left)
     mirrorTree(root.right)
};