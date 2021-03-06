/**
 * @param {number} n
 * @return {number[]}
 */
 var dicesProbability = function(n) {
     let dp=new Array(6).fill(1/6)
     for(let i=2;i<n+1;i++){
         let tmp=new Array(5*i+1).fill(0)
         for(let j=0;j<dp.length;j++){
             for(let k=0;k<6;k++){
                 tmp[j+k]=tmp[j+k]+dp[j]/6
             }
         }
         dp=tmp
     }
     return dp
};