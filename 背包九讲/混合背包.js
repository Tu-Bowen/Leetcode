/**
 * 
 * @param {Array} W n个物品重量
 * @param {Array} V n个物品体积
 * @param {Array} S n个物品数量
* @param {Number} n n个物品
 * @param {Number} m 背包容积
 */
//注意逆序
function bagSolution(W, V, S, n, m) {
    let dp = new Array(m + 1).fill(0)
    for (let i = 0; i < n; i++) {
        //完全
        if (S[i] === 0) {
            for (let j = V[i]; j <= m; j++)
                dp[j] = Math.max(dp[j], dp[j - V[i]] + W[i])
        }//多重背包
        else {
            if (S[i] === -1) S[i] = 1
            for (let k = 1; k <= S[i]; k = k * 2) {
                for (let j = m; j >= k * V[i]; j--) {
                    dp[j]=Math.max(dp[j],dp[j-V[i]*k]+W[i]*k)
                }
                S[i]=S[i]-k
            }
            if(S[i]!==0){
                for(let j=m;j>=S[i]*V[i];j--){
                    dp[j]=Math.max(dp[j],dp[j-S[i]*V[i]]+S[i]*W[i])
                }
            }
        }
    }
    return dp[m]
}