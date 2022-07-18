/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isBalanced = function(root) {
     let res=true
     function high(tree){
         if(tree===null)return 0
         let lhigh=high(tree.left)
         let rhigh=high(tree.right)
         if(Math.abs(rhigh-lhigh)>1)res=false
         return Math.max(lhigh,rhigh)+1
     }
     high(root)
     return res
};