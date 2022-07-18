/**
 * @param {number[][]} grid
 * @return {number}
 */
var largest1BorderedSquare = function (grid) {
    let r = grid.length, c = grid[0].length, dp = [], ans = 0
    for (let i = 0; i < r; i++) {
        dp.push(new Array(c))
        for (let j = 0; j < c; j++) {
            if (grid[i][j] === 1) {
                dp[i][j] = { left: 1, top: 1 }
                ans = 1
            }
            else
                dp[i][j] = { left: 0, top: 0 }
        }
    }
    //dp[0][0] = (grid[0][0] === 1 ? { left: 1, top: 1 } : { left: 0, top: 0 })
    for (let i = 1; i < r; i++) {
        if (grid[i][0] === 1) {
            dp[i][0].top = dp[i - 1][0].top + 1
            ans = 1
        }
    }
    for (let i = 1; i < c; i++) {
        if (grid[0][i] === 1) {
            dp[0][i].left = dp[0][i - 1].left + 1
            ans = 1
        }
    }
    //console.log(dp)
    for (let i = 1; i < r; i++) {
        for (let j = 1; j < c; j++) {
            if (grid[i][j] === 1) {
                dp[i][j] = { left: dp[i][j - 1].left + 1, top: dp[i - 1][j].top + 1 }
                let minlen = Math.min(dp[i][j].left, dp[i][j].top)
                while (minlen>ans&&(dp[i - minlen + 1][j].left < minlen || dp[i][j - minlen + 1].top < minlen)) {
                    minlen--
                }
                ans = Math.max(ans, minlen)
            }
        }
    }
    //console.log(dp)
    return ans*ans
};

console.log(largest1BorderedSquare([
    [0,1,1,1,1,0],
    [1,1,0,1,1,0],
    [1,1,0,1,0,1],
    [1,1,0,1,1,1],
    [1,1,0,1,1,1],
    [1,1,1,1,1,1],
    [1,0,1,1,1,1],
    [0,0,1,1,1,1],
    [1,1,1,1,1,1]]))