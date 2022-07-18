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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    if (root === null) return []
    let queue = [], ans = [], f = false
    queue.push(root)
    while (queue.length !== 0) {
        let len = queue.length, tmp = []
        for (let i = 0; i < len; i++) {
            let shft=queue.shift()
            if (f)tmp.push(shft)
            else tmp.unshift(shft)
            if (shft.left !== null)
                queue.push(shft.left)
            if (shft.right !== null)
                queue.push(shft.right)
        }
        f=!f
        ans.push(tmp)
    }
    return ans
};