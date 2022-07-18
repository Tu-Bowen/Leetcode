/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let n = nums.length
    let dp = new Array(n).fill(0)
    dp[0] = nums[0]
    for (let i = 1; i < n; i++) {
        if (i - 2 > -1)
            dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
        else
            dp[i] = Math.max(dp[i - 1], nums[i])
    }
    return dp[n-1]
};

console.log(rob([1, 2, 3, 1]))