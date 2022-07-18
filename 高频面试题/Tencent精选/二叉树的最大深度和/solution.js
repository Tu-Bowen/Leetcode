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
 var maxPathSum = function(root) {
        let res=-1001
        function maxGan(root){
            if(root===null)return 0
            let letfPrice=Math.max(maxGan(root.left),0)
            let rightPrice=Math.max(maxGan(root.right),0)
            let curPrice=letfPrice+rightPrice+root.val
            res=Math.max(res,curPrice)
            return  root.val+Math.max(letfPrice,rightPrice)
        }
        maxGan(root)
        return res
};