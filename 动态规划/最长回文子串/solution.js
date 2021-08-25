/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let n = s.length
    if (n == 1) return s[0]
    if ((n == 2 && s[0] == s[1]) || (n == 3 && s[0] == s[2])) return s


    let dp = new Array(n)
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(n)
        dp[i][i] = true
    }


    let len = 1, res = s[0]
    for (let i = n; i >= 0; i--) {
        for (let j = i + 1; j < n; j++) {
            dp[i][j] = ((j-i==1)&&s[i]==s[j])||(dp[i + 1][j - 1] && s[i] == s[j])
            //console.log(i,j)
            if (dp[i][j] && (j - i + 1 > len)) {
                //console.log(i,j)
                len=j-i+1
                res = s.substr(i, len)
            }
        }
    }
    //console.log(res)
    return res
};

longestPalindrome("aacabdkacaa")