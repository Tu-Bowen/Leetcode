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
        for(let j=m;j>0;j--){
            if(j>V[i])
            dp[j]=Math.max(dp[j],dp[j-V[i]]+W[i])
        }
    }
    return  dp[m]
}
let a=[0, 2, 5, 3, 3, 1 ,5 ,2 ,4 ,7 ,1]
let b=[0, 3, 3, 6, 1, 1, 2, 2, 3, 4, 2]
console.log(bagSolution(a,b,a.length,8))