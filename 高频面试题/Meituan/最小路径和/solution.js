/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    let m = grid.length, n = grid[0].length
    let dp = new Array()
    for (let i = 0; i < m; i++) {
        dp.push(new Array(n).fill(0))
    }
    dp[0][0] = grid[0][0]
    for (let i = 1; i < m; i++) {
        dp[i][0] = dp[i - 1][0] + grid[i][0]
    }
    for (let i = 1; i < n; i++) {
        dp[0][i] = dp[0][i - 1] + grid[0][i]
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
        }
    }
    return dp[m - 1][n - 1]
};

var cuba = function (num1, num2) {
    let len1 = num1.length, len2 = num2.length
    let dp = new Array(),ans=0
    for (let i = 0; i < len1+1; i++) {
        dp.push(new Array(len2+1).fill(0))
    }
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if(num1[i-1]==num2[j-1]){
                dp[i][j]=dp[i-1][j-1]+1
            }else{
                dp[i][j]=0
            }
            ans=Math.max(ans,dp[i][j])
        }
    }
    // console.log(dp)
    return ans
}
console.log(cuba([1,2,3,2,1],[3,2,1,4,7]))