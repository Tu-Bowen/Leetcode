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
var countNodes = function (root) {
    let q = [root], res = 0
    while (q.length !== 0) {
        res+=q.length
        for (let i = 0; i < q.length; i++) {
            let p = q.shift()
            if (p.left !== null) q.push(p.left)
            if (p.right !== null) q.push(p.right)
            // if (p.left === null && p.right === null) res++
        }
    }
    return res
};