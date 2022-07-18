/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    const n = nums.length
    let maxF = new Array(n), minF = new Array(n),res=nums[0]
    maxF[0]=nums[0],minF[0]=nums[0]
    for (let i = 1; i < n; i++) {
        maxF[i]=Math.max(maxF[i-1]*nums[i],minF[i-1]*nums[i],nums[i])
        minF[i]=Math.min(minF[i-1]*nums[i],maxF[i-1]*nums[i],nums[i])
        res=Math.max(res,maxF[i],minF[i])
    }
    return res
};
