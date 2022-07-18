/**
 * @param {number} N
 * @param {number} M
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
 var insertBits = function(N, M, i, j) {
     let arrN = N.toString(2).split('').reverse()
     let arrM = M.toString(2).split('').reverse()
     const len = j-i+1
     const lenM = arrM.length
     for(let p = lenM;p<len;p++){
         arrM[p] = '0'
     }
     arrN.splice(i,len,...arrM)
     return parseInt(arrN.reverse().join(""),2)
};