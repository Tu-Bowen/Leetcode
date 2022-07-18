/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function (preorder, inorder) {
    let m = new Map(), n = preorder.length
    for (let i = 0; i < inorder.length; i++) {
        m.set(inorder[i], i)
    }
    function dfs(prestart, preend, instart, inend) {
        if (preend < prestart||inend<instart)
            return null
        let rootIndex = prestart
        let rootNum = preorder[rootIndex]
        let leftTree = m.get(rootNum)-instart
        let rightTree = inend-m.get(rootNum)
        let curTree = new TreeNode(rootNum)
        curTree.left = dfs(prestart+1,prestart+leftTree, instart,m.get(rootNum)-1)
        curTree.right = dfs(prestart+leftTree+1,preend,m.get(rootNum)+1,inend)
        return curTree
    }
    return dfs(0, n - 1,0,n-1)
};