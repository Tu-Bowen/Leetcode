/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
     const m = matrix.length,n = matrix[0].length
     let p=0,q=n-1
     while(p<m&&q>=0){
         if(matrix[p][q] === target){
             return true
         }
         if(matrix[p][q] < target){
             p++
         }else{
             q--
         }
     }
     return false
};