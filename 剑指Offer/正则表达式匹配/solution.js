/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    function isMatch(i,j){
        if(i===0){
            return false
        }
        if(p[j-1]==='.'){
            return true
        }
        if(s[i-1]===p[j-1]){
            return true
        }
    }
    let sLen = s.length
    let pLen = p.length
    let dp = new Array()
    for (let i = 0; i <= sLen; i++) {
        dp.push(new Array(pLen + 1).fill(false))
    }
    dp[0][0] = true
    for (let i = 0; i <= sLen; i++) {
        for (let j = 1; j <= pLen; j++) {
            if(p[j-1]==='*'){
                dp[i][j]|=dp[i][j-2]
                if(isMatch(i,j-1)){
                    dp[i][j]|=dp[i-1][j]
                }
            }else{
                if(isMatch(i,j)){
                    dp[i][j]|=dp[i-1][j-1]
                }
            }
        }
    }
    return dp[sLen][pLen]
};