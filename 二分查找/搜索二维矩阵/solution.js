/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
     let m=matrix.length
     if(m===0)return false
     let n=matrix[0].length,low=0,high=m*n-1
     while(low<=high){
         let mid= Math.floor((high-low)/2+low)
         //console.log(mid/n,mid%n)
         let x = matrix[Math.floor(mid/n)][mid%n]
         if(x<target){
             low=mid+1
         }else if(x>target){
             high=mid-1
         }else{
             return true
         }         
     }
     return false
};

let matrix = [
    [1,3,5,7],
[10,11,16,20],
[23,30,34,60]], target = 3
searchMatrix(matrix,target)