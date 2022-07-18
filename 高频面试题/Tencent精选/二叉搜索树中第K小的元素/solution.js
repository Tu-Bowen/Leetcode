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
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(root, k) {
     let stack=[],c=root
     while(c!==null||stack.length!==0){
          while(c!==null){
              stack.push(c)
              c=c.left
          }
          c=stack.pop()
          k--
          if(k===0){
              break
          }
          c=c.right
     }
     return c.val
};