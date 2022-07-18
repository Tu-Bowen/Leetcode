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
 var isValidBST = function(root) {
     var arr = [],flag=true
     var dfs = function(root) {
        if(!root)return
        dfs(root.left)
        if(root.val<=arr[arr.length-1])
        flag=false
        arr.push(root.val)
        dfs(root.right)
    }
    dfs(root)
    return flag
};
