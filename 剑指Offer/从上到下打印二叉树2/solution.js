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
     let q=[],res=[]
     q.push()
     q.isEmpty=function(){
        return this.length===0  
    }
    while(!q.isEmpty()){
        let l=q.length,o=[]
        for(let i=0;i<l;i++){
            let u=q.shift()
            o.push(u.val)
            if(u.left!==null)q.push(u.left)
            if(u.right!==null)q.push(u.right)
        }
        res.push(o)
    }
    return res
};
