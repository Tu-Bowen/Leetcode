/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var getMaxMatrix = function (matrix) {
    if (!matrix.length) {
        return []
    }
    let m = matrix.length, n = matrix[0].length, res = new Array(4).fill(0),maxSum = matrix[0][0]
    for (let i = 0; i < m; i++) {
        let rowSum = new Array(n).fill(0)
        for (let j = i; j < m; j++) {
            for(let k =0;k<n;k++){
                rowSum[k] = matrix[j][k] +rowSum[k]
            }
            let [curSum,left,right] = maxSubArray(rowSum)
            //console.log(maxSubArray(rowSum))
            if(curSum>maxSum){
                res = [i,left,j,right]
                maxSum = curSum
            }
        }
    }
    return res
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let begin = 0
    let n = nums.length, 
    ans = nums[0], 
    cur = nums[0], 
    start = 0, end = 0
    for (let i = 1; i < n; i++) {
        if(cur>0){
            cur = cur + nums[i]
        }else{
            cur = nums[i]
            begin = i
        }
        if(cur>ans){
            ans = cur
            start = begin
            end = i
        }
    }
    return [ans, start , end]
};

let a = [[9,-8,1,3,-2],[-3,7,6,-2,4],[6,-4,-4,8,-7]]

getMaxMatrix(a)