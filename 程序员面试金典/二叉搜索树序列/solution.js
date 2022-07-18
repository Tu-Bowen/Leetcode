/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var BSTSequences = function (root) {
    var queue = new Array(),res = new Array();
    var huisu = (root,temp,queue)=>{
        if(!root)return
        if(root.left)queue.push(root.left)
        if(root.right)queue.push(root.right)
        if(queue.length===0){
            res.push(temp)
            return 
        }
        console.log(queue)
        const queuelength = queue.length
        for(let i=0;i<queuelength;i++){
           const cur = queue.shift()
           huisu(cur,[...temp,cur.val],[...queue])
           queue.push(cur)
        }
    }
    if(!root)return [[]]
    huisu(root,[root.val],queue)
    return res
};
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
let head = new TreeNode(5)
head.left=new TreeNode(2)
let p=head.left
p.left=new TreeNode(1)
p.right=new TreeNode(4)
p=p.right
p.left=new TreeNode(3)
console.log(BSTSequences(head))
