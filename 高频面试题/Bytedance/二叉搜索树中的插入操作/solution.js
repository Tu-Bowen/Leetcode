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
 * @param {number} val
 * @return {TreeNode}
 */
 var insertIntoBST = function(root, val) {
     function dfs(node){
         if(node===null){
             return new TreeNode(val,null,null)
         }
         if(node.val>val){
             return dfs(node.left)
         }
         return dfs(node.right)
     }
     dfs(root)
};
