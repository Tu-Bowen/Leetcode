/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    let m = new Map(), n = preorder.length
    for (let i = 0; i < inorder.length; i++) {
        m.set(inorder[i], i)
    }
    function dfs(instart, inend,poststart, postend) {
        if (postend < poststart||inend<instart)
            return null
        let rootIndex = preend
        let rootNum = preorder[rootIndex]
        // let leftTree = m.get(rootNum)-instart
        let rightTree = inend-m.get(rootNum)
        let curTree = new TreeNode(rootNum)
        curTree.left = dfs(instart,m.get(rootNum)-1,postend-rightTree,postend-1)
        curTree.right = dfs(m.get(rootNum)+1,inend,poststart,postend-rightTree-1)
        return curTree
    }
    return dfs(0, n - 1,0,n-1)
}; 