/**
 * @param {number} n
 * @return {number}
 */
 var cuttingRope = function (n) {
     if(n<4)return n-1
     let mod = 1000000007,res=1;
     while(n>4){
         res=(res*3%mod)
         n-=3
     }
     res*=n
     return res%mod
};