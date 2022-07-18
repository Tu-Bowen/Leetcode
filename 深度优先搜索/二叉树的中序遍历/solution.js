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
var inorderTraversal = function (root) {
    let p = root, stack = [], ans = []
    while (p !== null || stack.length != 0) {
        // sconsole.log(p)
        while (p !== null) {
            stack.push(p)
            p = p.left
        }
        let cur = stack.pop()
        ans.push(cur.val)
        p = cur.right
    }
    return ans
};
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
let s=new TreeNode(1,null,new TreeNode(2,new TreeNode(3)))
inorderTraversal(s)