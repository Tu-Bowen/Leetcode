//约瑟夫环
/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
 var lastRemaining = function(n, m) {
     let f=0
     for(let i=0;i<n+1;i++){
         f=(f+m)%i
     }
     return f
}; 