/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
 var convertInteger = function(A, B) {
     let p = A^B
     let res =0
     while(p){
         p=p&(p-1)//去除二进制中最后一个1
         res++
     }
     return res
};

console.log(convertInteger(826966453,-729934991))