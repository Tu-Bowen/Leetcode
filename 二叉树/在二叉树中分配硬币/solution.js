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
 * @return {number}
 */
var distributeCoins = function (root) {
    let res = 0
    function dfs(node) {
        if (node === null) return 0
        let L = dfs(node.left)
        let R = dfs(node.right)
        res += Math.abs(L) + Math.abs(R)
        return node.val + L + R - 1
    }
    dfs(root)
    return res
};