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
 * @param {number} target
 * @return {number[][]}
 */
 var pathSum = function(root, target) {
     if(root===null)return[]
     let res=[]
    /**
     * 
     * @param {TreeNode} node 
     * @param {number} sum 
     * @param {Array} temp 
     * @returns 
     */ 
    function Hs(node,sum,temp){
         //if(node===null)return
         if(sum===0&&node.left===null&node.right===null){
            res.push(temp)
        }
        //  sum=sum-node.val
        //  temp.push(node.val)
        if(node.left!==null)
        Hs(node.left,sum-node.left.val,[...temp,node.left.val])
        if(node.right!==null)
        Hs(node.right,sum-node.right.val,[...temp,node.right.val])
    }
    Hs(root,target-root.val,[root.val])
    return res
};