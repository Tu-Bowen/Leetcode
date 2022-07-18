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
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    let parent=null
    function recur(r){
        if(r===null)return false
        let cp=(r.val===p.val),cq=(r.val===q.val)
        let _r=recur(r.right),_l=recur(r.left)
        if(((cp||cq)&&(_r||_l))||(_r&&_l)){
            parent=r
        }
        if(cp||cq||_r||_l)return true
    }
    recur(root)
    return  parent
};