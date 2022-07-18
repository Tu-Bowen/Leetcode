/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function (nums) {
    let n = nums.length, dp = new Array()
    for (let i = 0; i < n; i++) {
        dp.push(new Array(2))
    }
    dp[0][0]=nums[0],dp[0][1]=0
    for (let i = 1; i < n; i++) {
        dp[i][0]=Math.max(dp[i-1][0],dp[i-1][1]-nums[i])
        dp[i][1]=Math.max(dp[i-1][1],dp[i-1][0]+nums[i])
    }
    return Math.max(dp[n-1][0],dp[n-1][1])
};