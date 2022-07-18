/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let n = nums.length, output = new Array(n), left = new Array(n).fill(1)
    for (let i = 1; i < n; i++) {
        left[i] = left[i - 1] * nums[i - 1];
    }
    let R = 1
    for (let i = n - 1; i >= 0; i--) {
        output[i]=left[i]*R
        R=R*nums[i]
    }
    return output
};