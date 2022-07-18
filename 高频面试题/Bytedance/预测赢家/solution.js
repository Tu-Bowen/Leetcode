/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var PredictTheWinner = function (nums) {
    let dp = new Array(nums.length)
    for (let i = 0; i < nums.length; i++) {
        dp[i] = new Array(nums.length)
        dp[i][i] = nums[i]
    }
    for (let i = nums.length - 2; i >= 0; i--) {
        for (let j = i+1; j < nums.length; j++) {
            dp[i][j]=Math.max(nums[i]-dp[i+1][j],nums[j]-dp[i][j-1])
        }
    }
    return dp[0][nums.length-1]>=0
};