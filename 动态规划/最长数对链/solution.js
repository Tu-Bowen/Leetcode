/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) {
    pairs.sort((a, b) => a[0] - b[0])
    let n = pairs.length, dp = new Array(n).fill(1),res=1
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (pairs[j][1] < pairs[i][0]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
        res=Math.max(res,dp[i])
    }
    console.log(dp)
    return res
};
findLongestChain([[1,2], [2,3], [3,4]])