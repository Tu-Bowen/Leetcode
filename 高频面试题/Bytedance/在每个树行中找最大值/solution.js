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
 * @return {number[]}
 */
var largestValues = function (root) {
    let s = [],ans=[]
    if (root === null) return []
    s.push(root)
    while (s.length !== 0) {
        let length = s.length,maxNum=s[0].val
        for (let i = 1; i < length; i++) {
            let node=s.shift()
            maxNum=Math.max(maxNum,node.val)
            if(node.left!==null)s.push(node.left)
            if(node.right!==null)s.push(node.right)
        }
        ans.push(maxNum)
    }
    return ans
};