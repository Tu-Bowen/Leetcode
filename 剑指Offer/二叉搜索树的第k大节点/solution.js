/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
 var kthLargest = function(root, k) {
     let res=0
    function dfs(r){
         if(r===null)return
         dfs(r.right)
         k--
         if(k===0)res=p.val
         dfs(r.left)
     }
     dfs(root)
     return res
};