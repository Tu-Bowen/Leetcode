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
 var sumNumbers = function(root) {
    if(root===null)return 0
    let ans=0 
    function dfs(node,numbers){
        if(node===null)return
         if(node.left===null&&node.right===null){
             numbers.push(node.val)
             let num=Number(numbers.join(''))
             ans+=num
             return
         }
         dfs(node.left,[...numbers,node.val])
         dfs(node.right,[...numbers,node.val])
     }
     dfs(root,[])
     return ans
};