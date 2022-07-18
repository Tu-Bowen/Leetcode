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
* @return {TreeNode}
*/
var subtreeWithAllDeepest = function (root) {
    let ans = root
    var dfs = function (root) {
        if (root === null) return 0
        let leftDep = dfs(root.left)
        let rightDep = dfs(root.right)
        if (leftDep === rightDep)
            ans = root
        else if (leftDep > rightDep)
            real(root.left)
        else
            real(root.right)
        return Math.max(leftDep, rightDep) + 1
    }
    var real = function (root) {
        dfs(root)
    }
    real(root)
    return ans
};