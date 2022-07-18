/**
 * 
 * @param {Array} W n个物品重量
 * @param {Array} V n个物品体积
 * @param {Array} S n个物品数量
* @param {Number} n n个物品
 * @param {Number} m 背包容积
 */
//注意逆序
function bagSolution(W, V, S,n, m) {
    let dp = new Array(m+1).fill(0)
    for(let i=0;i<n;i++){
        for(let j=m;j>0;j--){
            for(let k=0;k<=S[i]&&k*V[i]<=j;k++){
                dp[j]=Math.max(dp[j],dp[j-k*V[i]]+k*W[i])
            }
        }
    }
    return  dp[m]
}