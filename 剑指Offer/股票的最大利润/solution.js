/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
     let minPre=prices[0],res=0
     for(let i=i;i<prices.length;i++){
         res=Math.max(res,prices[i]-minPre)
         minPre=Math.min(minPre,prices[i])
     }
     return res
};