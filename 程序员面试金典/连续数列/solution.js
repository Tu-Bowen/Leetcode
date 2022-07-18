/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    if(nums.length==0)return 0
    let pre = [], sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i]
        pre[i] = sum
    }
    let min = pre[0] < 0 ? pre[0] :0,ans=pre[0]
    for (let i = 1; i < pre.length; i++) {
        ans=Math.max(ans,pre[i]-min)
        if(min>pre[i]){
            min=pre[i]
        }
    }
    return ans
};