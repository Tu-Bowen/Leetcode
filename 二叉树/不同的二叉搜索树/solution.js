/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
 var generateTrees = function (n) {
    if(n===1)return [new TreeNode(1)]
    function dfs(start, end) {
        if (start > end) return [null]
        let trees=[]
        for (let o = start; o <= end; o++) {
            let leftTree = dfs(start,o-1)
            let rightTree = dfs(o+1,end)
            for(let i=0;i<leftTree.length;i++){
                for(let j=0;j<rightTree.length;j++){
                    let curTree = new TreeNode(o)
                    curTree.left=leftTree[i]
                    curTree.right=rightTree[j]
                    trees.push(curTree)
                }
            }

        }
        return trees
    }
    return dfs(1,n)
};