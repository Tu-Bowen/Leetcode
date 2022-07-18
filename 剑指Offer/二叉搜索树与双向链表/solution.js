/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
    if(root===null)return null
    let pre=null,head=null
    let mid = function(cur){
        if(node===null)return null;
        mid(node.left)
        if(pre!==null)pre.right=cur
        else head=cur
        cur.left=pre
        pre=cur 
        mid(node.right)
    }
    mid(root)
    head.left=pre
    pre.right=head
    return head
};