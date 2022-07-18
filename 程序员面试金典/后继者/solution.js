/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
 var inorderSuccessor = function(root, p) {
    var arr = [],res=null;
    var mid = function(tree){
       if(!tree)return;
       mid(tree.left);
       if(p==tree){
           tree.mark=true;
       }
       if(arr[arr.length-1]&&arr[arr.length-1].mark){
           res=tree
       }
       arr.push(tree)
       mid(tree.right);
   }
   mid(root)
   return res
};