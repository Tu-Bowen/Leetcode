/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let n = s.length
    let dp = new Array()
    let maxLen=1,res=s[0]
    for (let i = 0; i < n; i++) {
        dp.push(new Array(n).fill(false))
        dp[i][i] = true
    }
    for (let i = n-1; i >=0; i--) {
        for (let j = i + 1; j < n; j++) {
            if (s[j] === s[i]) {
                if(i==0)console.log(j)
                if (j - i > 1)
                    dp[i][j] = dp[i + 1][j - 1]
                else
                    dp[i][j] = true
            } else {
                dp[i][j]=false
            }
            if(dp[i][j]&&(j-i+1>maxLen)){
                maxLen=j-i+1
                console.log(i,j)
                res=s.substring(i,j+1)
            }
        }
    }
    // console.log(dp)
    return res
};

console.log(longestPalindrome("aaaa"))

// console.log("abcdef".substring(1,2))