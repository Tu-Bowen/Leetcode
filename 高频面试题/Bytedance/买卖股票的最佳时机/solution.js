/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
     let minPrince=prices[0],res=0
     for(let i=1;i<prices.length;i++){
         res=Math.max(prices[i]-minPrince,res)
         minPrince=Math.min(prices[i],minPrince)
     }
     return res
};