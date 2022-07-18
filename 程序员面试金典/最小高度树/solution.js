/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var sortedArrayToBST = function(nums) {
     const dfs = (l,r)=>{
         if(r<=l)return null
         const mid = l+parseInt((r-l)/2)
         const node = new TreeNode(nums[mid])
         node.left = dfs(l,mid-1)
         node.right = dfs(mid+1,r)
         return node
     }
     return dfs(0,nums.length-1)
};