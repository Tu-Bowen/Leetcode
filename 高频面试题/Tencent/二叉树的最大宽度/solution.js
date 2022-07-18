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
var widthOfBinaryTree = function (root) {
    let ans = 0, m = new Map()
    function dfs(node, depth, pos) {
        if (node === null) return
        if (!m.has(depth)) m.set(depth, pos)
        ans = Math.max(ans, pos - m.get(depth) + 1)
        dfs(node.left, depth + 1, 2 * pos)
        dfs(node.right, depth + 1, 2 * pos + 1)
    }
    dfs(root, 0, 0)
    return ans
};
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
var widthOfBinaryTree = function (root) {
    let ans = 0, m = [[root, 0]], left = 0, right = 0
    while (m.length !== 0) {
        let len = m.length
        left=m[0][1]
        for (let i = 0; i < len; i++) {
            let cur=m.shift()
            right=cur[1]
            if(cur[0].left!==null)m.push([cur[0].left,2*(right-left)])
            if(cur[0].right!==null)m.push([cur[0].right,2*(right-left)+1])
            ans=Math.max(ans,right-left+1)
        }
    }
    return ans
};
