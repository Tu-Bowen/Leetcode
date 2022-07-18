/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let min=prices[0],ans=0
    for(let i=1;i<prices.length;i++){
        ans=Math.max(prices[i]-min,ans)
        min=Math.min(min,prices[i])
     }
     return min
};