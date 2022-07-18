/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
    let n = nums.length,ans=0
    let l1=0,l2=0,sum1=0,sum2=0
    for (let r = 0; r < n; r++) {
        sum1=sum1+nums[r]
        while(l1<=r&&sum1>goal){
            sum1=sum1-nums[l1]
            l1++
        }
        sum2=sum2+nums[r]
        while(l2<=r&&sum2>=goal){
            sum2=sum2-nums[l2]
            l2++
        }
        ans+=(l2-l1)
    }
    return ans
};