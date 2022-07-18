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