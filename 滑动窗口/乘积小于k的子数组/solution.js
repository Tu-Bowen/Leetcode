/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
    let n = nums.length, l = 0,chain=1,res=0
    for (let r = 0; r < n; r++) {
        chain=chain*nums[r]
            while(chain>=k&&l<n){
                chain=chain/nums[l]
                l++
            }
            res=(res+r-l+1)
    }
    return res
};