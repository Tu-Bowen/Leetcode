/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
    let numStr = JSON.stringify(num)
    function getNum(i, j) {
        return parseInt(numStr.substr(i, j - i + 1))
    }
    let dp = new Array(numStr.length + 1).fill(1)
    for (let i = 1; i < numStr.length; i++) {
        let t_num = getNum(i - 1, i)
        if (10 <= t_num && t_num <= 25)
            dp[i + 1] = dp[i - 1] + dp[i]
        else
            dp[i + 1] = dp[i]
    }
    // console.log(dp)
    return dp[numStr.length]
};
console.log(translateNum(12258))