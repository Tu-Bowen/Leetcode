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
    var  res = null;
    var dfs = (root,p,q)=>{
        if(!root) return false;
        const lson = dfs(root.left,p,q)
        const rson = dfs(root.right,p,q)
        if((lson&&rson)||((lson||rson)&&(root.val==q.val||root.val==p.val)))
        res=root
        return lson||rson||root.val==p.val||root.val==q.val;
    }
    dfs(root,p,q)
    return res 
};
