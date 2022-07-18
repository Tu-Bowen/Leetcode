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
 var levelOrder = function (root) {
    let q = [], tor = true,res=[]
    q.push(root)
    q.isEmpty = function () {
        return this.length === 0
    }
    while (!q.isEmpty()) {
        let length = q.length, tmp = []
            for (let i = 0; i < length; i++) {
                let cur=q.shift()
                tmp.push(cur)
                if(cur&&cur.left!==null)q.push(cur.left)
                if(cur&&cur.right!==null)q.push(cur.right)
            }
            if(!tor){
                tmp=tmp.reverse()
            }
            tor=!tor
        res.push(tmp)
    }
    return res
};