/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
    let n = s.length
    if (n == 1) return 1
    if (n == 2 && s[0] == s[1]) return 2
    if (n == 3 && s[0] == s[2]) return 3

    let dp = new Array(n)
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(n)
        dp[i][i] = 1
    }
    for (let i = n; i >= 0; i--) {
        for (let j = i + 1; j < n; j++) {
            if (j - i == 1) {
                if (s[i] == s[j])
                    dp[i][j] = 2;
                else
                    dp[i][j] = 1;
                continue;
            }
            if (s[i] == s[j]) {
                dp[i][j] = Math.max(dp[i + 1][j - 1]+2, dp[i][j - 1], dp[i + 1][j])
            } else {
                dp[i][j] = Math.max(dp[i + 1][j - 1], dp[i][j - 1], dp[i + 1][j]);
            }
        }
    }
    return dp[0][n - 1]
};