
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
var convertBiNode = function (root) {
    let head = new TreeNode(-1), pre = head
    let dfs = (node) => {
        if (!node) return null
        dfs(node.left)
        pre.right = node
        pre=node
        node.left = null
        dfs(node.right)
    }
    return head.right
};