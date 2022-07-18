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
 var lowestCommonAncestor = function (root, p, q) {
    let cur = root,_p = Math.min(p.val, q.val), _q = Math.max(p.val, q.val)
    while (cur !== null) {
        // console.log(cur.val)
        if (cur.val < _p && cur.val < _q) {
            cur = cur.right
            continue
        }
        if (cur.val > _p && cur.val > _q) {
            cur = cur.left
            continue
        }
        if (_p <= cur.val && cur.val <= _q){
            return cur
        }
    }
};