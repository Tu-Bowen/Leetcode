/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if(root===null)return[]
    let q=[],res=[]
    q.push(root)
    q.isEmpty=function(){
       return this.length===0  
   }
   while(!q.isEmpty()){
       let l=q.length
       for(let i=0;i<l;i++){
           let u=q.shift()
           res.push(u.val)
           // console.log(u.val)
           if(u.left!==null)q.push(u.left)
           if(u.right!==null)q.push(u.right)
       }
   }
   return res
};