/**
 * 打折购买糖果的最小开销
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (cost) {
    if (cost.length === 1) return cost[0]
    if (cost.length === 2) return cost[1] + cost[0]
    cost.sort((a, b) => {
        return a - b
    })
    let dp = new Array(cost.length + 1).fill(0)
    dp[1] = cost[0]
    dp[2] = cost[0] + cost[1]
    for (let i = 3; i <= cost.length; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], cost[i - 1] + cost[i - 2] + dp[i - 3])
    }
    console.log(dp[cost.length])
    return dp[cost.length]
};
/**
 * 统计隐藏数组数目
 * @param {number[]} differences
 * @param {number} lower  
 * @param {number} upper
 * @return {number}
 */
var numberOfArrays = function (differences, lower, upper) {
    let pre = [], left=Math.max(lower-differences[0],lower), right=Math.min(upper,upper-differences[0])
    pre.push(differences[0])
    for (let i = 1; i < differences.length; i++) {
        pre.push(pre[i - 1] + differences[i])
        left=Math.max(left,lower-pre[i])
        right=Math.min(right,upper-pre[i])
    }
    if(left>right)return 0
    return right-left+1
};
/**
 * 价格范围内最高排名的 K 样物品
 * @param {number[][]} grid
 * @param {number[]} pricing
 * @param {number[]} start
 * @param {number} k
 * @return {number[][]}
 */
 var highestRankedKItems = function(grid, pricing, start, k) {

};
/** 分割长廊的方案数
 * @param {string} corridor
 * @return {number}
 */
 var numberOfWays = function(corridor) {

};