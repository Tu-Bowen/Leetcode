/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    let newHead = new TreeNode(), last = newHead
    function dfs(node) {
        if (node === null) return
        let left = node.left, right = node.right
        last.right = node
        last = last.right
        node.left=null
        dfs(left)
        dfs(right)
    }
    dfs(root)
    return newHead.right
};