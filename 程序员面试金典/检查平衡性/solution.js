/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var treeheight = function(tree) {
    if(!tree)return {height:0,isBalanced:true};
    const left = treeheight(tree.left)
    const right = treeheight(tree.right)
    return {
        height:Math.max(left.height,right.height)+1,
        isBalanced:(Math.abs(left.height-right.height)<=1&&left.isBalanced&&right.isBalanced)
    }
}
 var isBalanced = function(root) {
     return treeheight(root).isBalanced
};
