/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(matrix, k) {
    let n=matrix.length
    //获取二维数组中有多少数比mid小
    function check(mid) {
         let i=0,j=n-1,num=0
         while(i<n&&j>=0){
            if(matrix[i][j]<=mid){
                num=num+j+1
                i++
            }else{
                j--
            }
         }
         return num>=k
     }
     let left=matrix[0][0],right=matrix[n-1][n-1]
     while(left<right){
         let mid=Math.floor((right-left)/2)+left
         if(check(mid)){
             right=mid
         }else{
             left=mid+1
         }
     }
     return left
};