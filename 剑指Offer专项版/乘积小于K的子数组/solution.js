/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
    let ans = 0
    let l = 0
    let chain = 1
    for (let r = 0; r < nums.length; r++) {
        chain = chain * nums[r]
        while (chain >= k && l <= r) {
            chain=chain/nums[l]
            l++
        }
        if(l<=r){
            ans=ans+(r-l+1)
        }
    }
    return ans
};