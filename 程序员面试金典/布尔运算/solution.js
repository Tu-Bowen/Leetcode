/**
 * @param {string} s
 * @param {number} result
 * @return {number}
 */
var countEval = function (s, result) {
    const n = s.length
    let dp = new Array()
    for (let i = 0; i < n; i++) {
        dp.push(new Array())
        for (let j = 0; j < n; j++) {
            dp[i].push(new Array(2).fill(0))
        }
    }

    for (let i = 0; i < n; i++) {
        dp[i][i][0] = (s[i] === '0' ? 1 : 0)
        dp[i][i][1] = (s[i] === '1' ? 1 : 0)
    }


    for (let len = 2; len <= n; len++) {
        for (let l = 0; (l + len - 1) < n; l++) {
            const r = (l + len - 1)
            for (let i = l; i <= r; i++) {
                const c = s[i]
                if (c === '&') {
                    dp[l][r][0] += dp[l][i - 1][0] * dp[i + 1][r][0] + dp[l][i - 1][0] * dp[i + 1][r][1] + dp[l][i - 1][1] * dp[i + 1][r][0];
                    dp[l][r][1] += dp[l][i - 1][1] * dp[i + 1][r][1];
                }
                if (c === '|') {
                    dp[l][r][0] += dp[l][i - 1][0] * dp[i + 1][r][0];
                    dp[l][r][1] += dp[l][i - 1][1] * dp[i + 1][r][1] + dp[l][i - 1][0] * dp[i + 1][r][1] + dp[l][i - 1][1] * dp[i + 1][r][0];
                }
                if (c === '^') {
                    dp[l][r][0] += dp[l][i - 1][0] * dp[i + 1][r][0] + dp[l][i - 1][1] * dp[i + 1][r][1];
                    dp[l][r][1] += dp[l][i - 1][0] * dp[i + 1][r][1] + dp[l][i - 1][1] * dp[i + 1][r][0];
                }
            }
        }
    }


    return dp[0][n-1][result]
};
// countEval("1234")