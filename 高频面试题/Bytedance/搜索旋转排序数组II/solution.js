/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
    let l = 0, r = nums.length - 1,n=nums.length
    if(nums[0]===target||nums[n-1]===target)return true
    while (l < r) {
        let mid = (l + r) >> 1
        if(nums[l]==target)return true
        if (nums[mid] === target) return true
        if (nums[0] < nums[mid]) {
            if (nums[0] <= target && target < nums[mid]) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        } else if(nums[0]>nums[mid]){
            if (nums[mid] < target && target <= nums[n-1]) {
                l=mid+1
            } else {
                r=mid-1
            }
        }else{
            l++
        }
    }
    return nums[l]===target
}
console.log(search([1,0,1,1,1],0))