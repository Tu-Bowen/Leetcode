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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    let m = new Map(), n = preorder.length
    for (let i = 0; i < inorder.length; i++) {
        m.set(inorder[i], i)
    }
    var build = (preleft, preright, inleft, inright) => {
        if (preleft > preright) return null
        //if(inright < inleft) return null
        let root = preorder[preleft]
        let rootidx = m.get(root)
        let node = new TreeNode(root)
        let leftlength = (rootidx-inleft)
        //console.log(root,leftlength)
        //if(leftlength<0)return
        node.left = build(preleft + 1, preleft + leftlength, inleft, rootidx - 1)
        node.right = build(preleft + leftlength + 1, preright, rootidx + 1, inright)
        return node
    }
    return build(0, n - 1, 0, n - 1)
};



let pre = [3, 9, 20, 15, 7], ino = [9, 3, 15, 20, 7]
buildTree(pre, ino)