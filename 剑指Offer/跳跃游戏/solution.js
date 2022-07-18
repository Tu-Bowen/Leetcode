/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let n = nums.length, maxPosition = 0,end=0,steps=0
    for (let i; i < n; i++) {
        maxPosition=Math.max(maxPosition,i+nums[i])
        if(i===end){
            end=maxPosition
            steps++
        }
    }
    return steps
};