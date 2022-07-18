/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var findNumberIn2DArray = function(matrix, target) {
     let m=matrix.length,n=matrix[0].length
     if(m===0)return (target===0?true:false)
     let r=0,c=n-1
     while(r<m&&n>=0){
         if(matrix[r][c]<target){
             r++
         }else if(matrix[r][c]>target){
             c--
         }else{
             return true
         }
     }
     return false
};