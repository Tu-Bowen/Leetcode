/**
 * @param {number} n
 * @return {number}
 */
 var waysToChange = function(n) {
     const dp = new Array(n).fill(0)
     const coins = [25,10,5,1]
     for( let i=0;i<coins.length;i++){
         coin = coins[i]
         for(let j=0;j<n;j++){
             dp[j] = (dp[j]+dp[j-coin]) % 1000000007
         }
     }  
     return dp[dp.length-1]
};