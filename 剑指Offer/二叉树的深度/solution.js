/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    let queue=new Array(),cur=root,h=0
    queue.isEmpty=function () {
        return this.length===0
    }
    while(!queue.isEmpty()||cur!==null){
        let length=queue.length
        for(let i=0;i<length;i++){
            let f=queue.shift()
            if(f.left!==null)queue.push(f.left)
            if(f.right!==null)queue.push(f.right)
        }
        h++
    }
    return h
};