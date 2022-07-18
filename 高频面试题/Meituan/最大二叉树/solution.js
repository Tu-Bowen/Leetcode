/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
    return buildTree(nums,0,nums.length-1)
};
var buildTree = function (nums, left, right) {
    if(left>right)return null
    let maxNum = nums[left], maxIdx = left
    for (let i = left; i <= right; i++) {
        if (maxNum < nums[i]) {
            maxIdx = i
            maxNum = nums[i]
        }
    }
    let root = new TreeNode(maxNum)
    root.left=buildTree(nums,left,maxIdx-1)
    root.right=buildTree(nums,maxIdx+1,right)
    return root
}
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}