/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
 var isSubStructure = function (A, B) {
    if(B===null||A===null)return false 
    var dfs = function (rootA, rootB) {
        if(rootB===null)return true
        if (rootA === null) return false
        return (rootA.val === rootB.val && dfs(rootA.left, rootB.left) && dfs(rootA.right , rootB.right))
    }
    return dfs(A,B)||isSubStructure(A.left,B)||isSubStructure(A.right,B)
};