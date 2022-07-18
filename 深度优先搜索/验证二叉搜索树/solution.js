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
 * @return {boolean}
 */
 var isValidBST = function(root) {
    let stack=new Array(),p=root,lastnum="s";
    while(stack.length!=0||p!==null){
        while(p!==null){
            stack.push(p)
            p=p.left
        }
        let cur=stack.pop()
        if(lastnum!="s"&&cur.val<=lastnum){
            console.log(cur.val)
            return false
        }
        lastnum=cur.val
        p=cur.right
    }
    return true
};