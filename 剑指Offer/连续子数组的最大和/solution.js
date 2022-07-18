/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let n = nums.length, start=-1,end=0,ans=nums[0],cur=nums[0]
    for (let i = 1; i < n; i++) {
        if(cur<0){
            start=i
            cur=0
        }
        cur+=nums[i]
        if(cur>ans){
            ans=cur
            end=i
        }
    }
    return ans
};