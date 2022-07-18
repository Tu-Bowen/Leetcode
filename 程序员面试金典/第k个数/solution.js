/**
 * @param {number} k
 * @return {number}
 */
 var getKthMagicNumber = function(k) {
     let a=0,b=0,c=0
     const dp =new Array(k).fill(1)
     for(let i=1;i<k;i++){
         const _a=dp[a]*3,_b=dp[b]*5,_c=dp[c]*7,min=Math.min(_a,_b,_c)
         if(_a==min){
             a++
         }
         if(_b==min){
             b++
         }
         if(_c==min){
             c++
         }
         dp[i]=min
     }
     //console.log(dp)
     return dp[k-1]
};
console.log(getKthMagicNumber(7))