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
    let res=null
    var dfs=(r)=>{
        if(r===null)return false
        let cp=(r===p),cq=(r===q)
        let le=dfs(r.left),ri=dfs(r.right)
        if(((cp||cq)&&(le||ri))||(le&&ri))
        res=r
        return (cp||cq||le||ri)
    }
    dfs(root)
    return res
};