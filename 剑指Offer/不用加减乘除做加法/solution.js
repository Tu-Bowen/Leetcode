/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
 var add = function(a, b) {
     while(b!=0){
         let c=((a&b)<<1)
         a=(a^b)
         b=c
     }
     return a
};