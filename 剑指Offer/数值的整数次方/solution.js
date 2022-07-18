/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
     if(n===0)return 1
     if(n===1)return x
     if(n===-1)return 1/x
     let r=myPow(x,n>>1)
     r=r*r
     if(n&1===1)r*=x
     return r
};