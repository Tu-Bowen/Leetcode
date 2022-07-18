/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
    let n = nums.length,s=new Set()
    let min = nums[0], max = nums[0]
    for (let i = 1; i < n; i++) {
        if(nums[i]===0)continue
        max=Math.max(max,nums[i])
        min=Math.min(min,nums[i])
        if(s.has(nums[i]))return false
        s.add(nums[i])
    }
    return (max-min)<5
};