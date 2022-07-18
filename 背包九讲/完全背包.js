/**
 * 
 * @param {Array} W n个物品重量
 * @param {Array} V n个物品体积
 * @param {Number} n n个物品
 * @param {Number} m 背包容积
 */
//注意逆序
function bagSolution(W, V, n, m) {
    let dp = new Array(m+1).fill(0)
    for(let i=0;i<n;i++){
        for(let j=V[i];j<=m;j++){
            dp[j]=Math.max(dp[j],dp[j-V[i]]+W[i])
        }
    }
    return  dp[m]
}