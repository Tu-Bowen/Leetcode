/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    let n = s.length, ans = n
    let dp = new Array(n).fill().map(() => new Array(n).fill(true))
    for (let i = n-1; i >=0 ; i--) {
        for (let j = i + 1; j < n; j++) {
            if (j - i === 1) {
                ans += (s[i] === s[j] ? 1 : 0)
                dp[i][j]=(s[i] === s[j])
                continue
            }
            dp[i][j]=(s[i]===s[j]?dp[i+1][j-1]:false)
            ans+=(dp[i][j]?1:0)
        }
    }
    return ans
};
console.log(countSubstrings("fdsklf"))