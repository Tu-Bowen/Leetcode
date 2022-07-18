/**
 * @param {number} n
 * @return {number}
 */
 var cuttingRope = function (n) {
    let dp = new Array(n+1).fill(1)
    for (let i = 2; i < n+1; i++) {
        //dp.push(new Array(n+1)).fill(0)
        for(let j=1;j<=i;j++){
            if(i===n&&j===n){
                break
            }
            dp[i]=Math.max(dp[i-j]*j,dp[i])
        }
    }
    return dp[n]
};
console.log(cuttingRope(2))