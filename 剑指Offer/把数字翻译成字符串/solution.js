/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
    let numstr = num.toString()
    let n = numstr.length
    let dp = new Array(n + 1)
    dp[0] = 1
    dp[1] = 1
    for (let i = 2; i < n + 1; i++) {
        let t=Number(numstr[i-2]+numstr[i-1])
        if(10<=t&&t<=25){
            dp[i]=dp[i-1]+dp[i-2]
        }else{
            dp[i]=dp[i-1]
        }
    }
    return dp[n]
};