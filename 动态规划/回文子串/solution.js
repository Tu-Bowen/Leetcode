/**
 * @param {string} s
 * @return {number}
 */
 var countSubstrings = function (s) {
    let n = s.length
    if (n == 1) return 1
    if (n == 2 && s[0] == s[1]) return 3


    let dp = new Array(n)
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(n)
        dp[i][i]=true
    }

    let res=n;

    for (let i = n; i >= 0; i--) {
        for (let j = i + 1; j < n; j++) {
            if(s[i]==s[j]&&(j-i<2||dp[i+1][j-1])){
                dp[i][j]=true
                res++
            }else
            dp[i][j]=false
        }
    }

    return res
};

countSubstrings("aaaaa")