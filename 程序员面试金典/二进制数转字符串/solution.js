/**
 * @param {number} num
 * @return {string}
 */
 var printBin = function(num) {
     let res = '0.'
     for(let i=0;i<30;i++){
         num = num * 2
         const zs = Math.floor(num)
         res = res + zs
         num = num - zs
         if(num === 0)
         return res
     } 
     if(num !== 0)
     return 'ERROR'
};