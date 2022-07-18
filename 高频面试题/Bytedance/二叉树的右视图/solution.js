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
 var rightSideView = function(root) {
     if(root===null)return []
     let queue=[root],ans=[]
     while(queue.length!==0){
         let len=queue.length
         ans.push(queue[queue.length-1].val)
         for(let i=0;i<len;i++){
             let a=queue.shift()
             if(a.left!==null)queue.push(a.left)
             if(a.right!=null)queue.push(a.right)
         }
     }
     return ans
}; 