/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var _superEggDrop = function (k, n) {
    let dp = new Array()
    for (let i = 0; i <= n; i++) {
        dp.push(new Array(k).fill(Number.MAX_VALUE))
        dp[i][0] = i
    }
    for (let i = 0; i < k; i++) {
        dp[0][i] = 0
    }
    //console.log(dp)
    for (let i = 1; i <= n; i++) {
        for (let o = 1; o < k; o++) {
            for (let j = 1; j <= i; j++) {
                let temp = Math.max(dp[j - 1][o - 1], dp[i - j][o])
                dp[i][o] = Math.min(dp[i][o], (temp === Number.MAX_VALUE ? temp : temp + 1))
            }
        }
    }
    //console.log(dp)
    return dp[n][k - 1]
};

/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var superEggDrop = function (k, n) {
    if (n == 1) return 1
    let dp = new Array(), ans = -1
    for (let i = 0; i <= n; i++) {
        dp.push(new Array(k + 1).fill(0))
    }
    for (let i = 1; i <= k; ++i) {
        dp[1][i] = 1;
    }
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= k; j++) {
            dp[i][j] = 1 + dp[i - 1][j - 1] + dp[i - 1][j]
        }
        if (dp[i][k] >= n) {
            ans = i
            break;
        }
    }
    return ans
};
console.log(superEggDrop(8, 1000))